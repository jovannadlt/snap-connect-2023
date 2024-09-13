import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Image, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fontHeader } from "../../assets/themes/font";
import { colors } from "../../assets/themes/colors";
import Box from "../components/Box";
import IconButton from 'react-native-vector-icons/MaterialIcons';
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import db from "../../firebase";
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getChat } from '../utils/hooks/getChatGPT';
import TextInputComponent from '../components/TextInputComponent';

const prompt = [
    {
        role: "system",
        content: 'You are giving me a one sentence prompt that inquires the user about their day/ interesting topics that help reflect what their day was like.',
    },
];


export default function AddPostResources({ route }) {
    const { names, post } = route.params;
    const [text, setText] = useState('');
    const auth = getAuth();
    const user = auth.currentUser;
    const name = user.email.split("@")[0];
    const navigation = useNavigation();

    const onSend = async () => {
        try {
            const docRef = doc(db, "Forums", "Resources");
            await updateDoc(docRef, {
                post: arrayUnion({
                    content: text,
                    user: name,
                }),
                lastUpdated: Date.now(),
            });
            console.log("Post added successfully!");

            // Fetch the updated data in Resources.js
            navigation.navigate("Resources", {
                updatedPost: { content: text, user: name }
            });
        } catch (error) {
            console.error("Error adding post:", error);
        }
    };
    navigation.setOptions({
        headerRight: () => (
            <Button title="Submit" onPress={() => {
                onSend(post, names); 
                navigation.navigate("Resources", { post: post, name: names });
            }} />
        ),
    });
    

    async function fetchInitialMessage() {
        const response = await getChat(prompt);
        console.log(response.choices[0].message.content);
        setBotPrompt(response.choices[0].message.content);
    }

    useEffect(() => {
        fetchInitialMessage();
    }, []);

    const [botPrompt, setBotPrompt] = useState('');

    return (
        <ImageBackground style={styles.container} resizeMode='cover' source={require('../../assets/backgrounds/background.png')}>
            <ScrollView
                vertical={true}
                showsVerticalScrollIndicator={false}>
                <View style={styles.box1}>
                    <Box style={styles.inputBox}>{botPrompt}</Box>
                    <View style={styles.space}></View>
                    <TextInputComponent 
                        text={text}
                        onSaveText={(newText) => {
                            setText(newText);
                        }}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.buttonPos} onPress={() => {
                onSend();
                navigation.navigate("Resources", { post: post, name: names });
            }}>
                <View style={styles.addContainer}>
                    <Image source={require('../../assets/AddButton.png')} style={{ width: 50, height: 50 }} />
                </View>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box1: {
        flexDirection: 'column',
        padding: 20,
    },
    inputBox: {
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 10,
        borderRadius: 10,
    },
    space: {
        height: 20,
    },
    input: {
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 4,
    },
    status: {
        padding: 10,
        textAlign: 'center',
    },
});
