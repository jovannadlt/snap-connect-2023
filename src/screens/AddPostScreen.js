import React, { useState, useEffect } from 'react';
import { Keyboard, Text, TextInput, StyleSheet, ImageBackground, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Box from "../components/Box";
import TextInputComponent from '../components/TextInputComponent';
import { getChat } from "../utils/hooks/getChatGPT";
import { useNavigation } from '@react-navigation/native';

import db from "../../firebase";
import { doc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore";

const prompt = [
    {
        role: "system",
        content: 'You are giving me a one sentence prompt that inquires the user about their day/ interesting topics that help reflect what their day was like.',
    },
];


export default function CreatePost() {
    const [text, setText] = useState();
    const navigation = useNavigation();

    const onSend = (text) => {
        updateDoc(
            doc(db, "Forums", "Journal"),
            {
                messages: arrayUnion(text),
                lastUpdated: Date.now(),
            }
        )
    };

    const [botPrompt, setBotPrompt] = useState('');
    navigation.setOptions({
        headerRight: () => (
            <Button title="Submit" onPress={() => {
                onSend(text);
                console.log("just before navigating")
                navigation.navigate("Journals", { text: text })
            }} />
        ),
    });
    async function fetchInitialMessage() {
        const response = await getChat(prompt);
        console.log(response.choices[0].message.content)
        setBotPrompt(response.choices[0].message.content);
    }

    useEffect(() => {
        fetchInitialMessage();
    }, []);

    return (
        <ImageBackground style={styles.container} resizeMode='cover' source={require('../../assets/backgrounds/background.png')}>
            <ScrollView
                vertical={true}
                showsVerticalScrollIndicator={false}>
                <View style={styles.box1}>
                    <Box style={styles.inputBox} name='My AI' img='ai'>{botPrompt}</Box>
                    <View style={styles.space}></View>
                    <TextInputComponent 
                        text={text}
                        onSaveText={(newText) => {
                            setText(newText);
                        }}
                    />
                </View>
            </ScrollView>
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
})
