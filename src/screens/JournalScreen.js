import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fontHeader } from "../../assets/themes/font";
import { colors } from "../../assets/themes/colors";
import Box from "../components/Box";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import db from "../../firebase";
import IconButton from 'react-native-vector-icons/MaterialIcons';

export default function JournalScreen({ route, navigation }) {
  const { text } = route.params;
  const [post, setPost] = useState([]);
  async function getSnap() {
    const docRef = doc(db, "Forums", "Journal");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const journalData = docSnap.data();
      setPost(journalData.messages)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

  }
    useEffect(() => {
    getSnap();
  }, [text])

  const insets = useSafeAreaInsets();

return (
  <ImageBackground style={styles.container} resizeMode='cover' source={require('../../assets/backgrounds/background.png')}>
      <ScrollView
        vertical={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.storiesContainer}
      >
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.sectionHeader}>Connect with yourself.</Text>
          </View>
          {
            post.slice(0).reverse().map((text) => (
              <View style={styles.box1}>
                <Box style={styles.inputBox}img='tati'>{text}</Box>
              </View>
            ))
          }
          <View style={styles.box1}>
                <Box style={styles.inputBox} img='tati' format='p'>Spent the afternoon at the park, basking in the tranquility of rustling leaves and distant laughter. The sun's warmth and nature's embrace melted away all the stress.</Box>
          </View>
          <View style={styles.box1}>
                <Box style={styles.inputBox} img='tati' format='a'>The topic for this recording was how fun it was hanging out with my friends again!</Box>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonPos} onPress={() => { navigation.navigate("AddPostScreen") }}>
        <View style={styles.addContainer}>
        <Image source={require('../../assets/AddButton.png')}  style={{ width: 50, height: 50 }} />
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonPos: {
    flex: 1,
    position: "absolute",
    right: 20,
    bottom: 15,
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
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 5,
    borderRadius: 10,
  },
  contentContainer: {
    padding: 12,
    display: "flex",
    flexDirection: "column",
    gap: 10,
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
});
