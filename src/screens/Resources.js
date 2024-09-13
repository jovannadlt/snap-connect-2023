import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Image, Linking} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fontHeader } from "../../assets/themes/font";
import { colors } from "../../assets/themes/colors";
import Box from "../components/Box";
import IconButton from 'react-native-vector-icons/MaterialIcons';
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";
import { useIsFocused } from '@react-navigation/native';
import CommentSlideUp from "../components/CommentSlideUp"; 


export default function Resources({ route, navigation }) {
    const insets = useSafeAreaInsets();
    const [forumData, setForumData] = useState({ bitmoji: [], link: [], names: [], post: [] });
    const isFocused = useIsFocused(); // Use the isFocused hook

    //selecting comment
    const [selectedComment, setSelectedComment] = useState(null); // Add this line

  const handleCommentSelection = (comment) => {
    setSelectedComment(comment);
  };


    async function getSnap() {
        try {
            const docRef = doc(db, "Forums", "Resources");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                setForumData(data);
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getSnap();
    }, []);

        // Fetch the updated data whenever the screen comes into focus
        useEffect(() => {
          if (isFocused) {
              getSnap();
          }
      }, [isFocused]);

    return (
        <ImageBackground style={styles.container} resizeMode='cover' source={require('../../assets/backgrounds/background.png')}>
            <ScrollView
                vertical={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.storiesContainer}
            >
                <View style={styles.container}>
                    {forumData.post.slice(0).reverse().map((post, index) => (
                        <View key={index} style={styles.box1}>
                            <Box name = {post.user === 'Me' ? 'Me' : post.user}  img = {post.bitmoji} style={styles.inputBox}>
                                <Text onPress={() => handleCommentSelection(post)} >{post.content}</Text>
                                {post.link && (
                    <TouchableOpacity onPress={() => Linking.openURL(post.link)}>
                        <Text style={styles.blueText}>{post.link}</Text>
                    </TouchableOpacity>
                )}
                            </Box>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.buttonPos} onPress={() => {
                navigation.navigate("AddPostResources", {
                    names: forumData.names,
                    post: forumData.post
                });
            }}>
                <View style={styles.addContainer}>
                    <Image source={require('../../assets/AddButton.png')} style={{ width: 50, height: 50 }} />
                </View>
            </TouchableOpacity>
            {selectedComment && (
        <CommentSlideUp
          comment={selectedComment}
          onClose={() => setSelectedComment(null)}
        />
      )}
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
  buttonPos: {
    flex: 1,
    position: "absolute",
    right: 20,
    bottom: 20
  },
  addContainer: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    // backgroundColor: "green"
  },
  box1: {
    flexDirection: 'row',
    padding: 20,
    },
  inputBox: {
    flexDirection: 'column',
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    },
  contentContainer: {
    padding: 12,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  storiesContainer: {
    flexGrow: 1,
  },
  sectionHeader: {
    textAlign: "left",
    paddingVertical: 4,
    color: colors.primary,
    paddingTop: 20,
    fontSize: fontHeader.fontSize,
    fontFamily: fontHeader.fontFamily,
    fontWeight: fontHeader.fontWeight,
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
    },
    blueText: {
      color: "#2B83B3",
      fontSize: 14,
      paddingTop: 4,
      textDecorationLine: 'underline',
    },//for links
});