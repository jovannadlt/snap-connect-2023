import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";
import ChatDropAbove from "../components/ChatDropAbove";

import Header from "../components/Header";
import { CHATBOTS } from "./ConversationScreen";

export default function ChatScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/backgrounds/chatBackground.png')}
        resizeMode="cover"
      >
        <View style={styles.chatDropContainer}>
          <ChatDropAbove />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  imageBackground: {
    flex: 1, // Take up the whole screen
    width: "100%", // Set the width to 100%
    height: "100%",
  },
  chatDropContainer: {
    position: "absolute",
    right: 18,
    top: 10,
    bottom: -30,
  },
});
