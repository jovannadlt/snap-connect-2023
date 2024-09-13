import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { fontHeader } from "../../assets/themes/font";
import { colors } from "../../assets/themes/colors";
// import StoriesBitmoji from "../components/StoriesBitmoji";

import Header from "../components/Header";

export default function StoriesBitmoji({Username="john", Name="john", img='John'}) {
  // imgInk is used to get the images of the 4 ppl in the SnapConnect page
  var imgInk = require("../../assets/bitmoji/personalBitmoji.png");
  if(img==='Katie'){
    imgInk = require("../../assets/bitmoji/Katie.png");
  }
  if(img==='JohnSmith'){
    imgInk = require("../../assets/bitmoji/JohnSmith.png");
  }
  if(img==='Mateo'){
    imgInk = require("../../assets/bitmoji/Mateo.png");
  }
  if(img==='Jess'){
    imgInk = require("../../assets/bitmoji/JessBitmoji.png");
  }
  return (
    <View style={styles.myBitmoji}>
      <Image
        style={styles.bitmojiImage}
        source={imgInk}
      />
      <View style={styles.bitmojiTextContainer}>
        <Text style={styles.bitmojiText}>{Name}</Text>
        <Text style={styles.usernameText}>@{Username}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myBitmoji: {
    alignItems: "center",
    justifyContent: "center",
  },
  bitmojiImage: {
    width: 80,
    height: 80,
  },
  bitmojiTextContainer: {
    borderRadius: 20,
    padding: 4,
  },
  bitmojiText: {
    alignSelf: "center",
    fontSize: 12,
    fontWeight: "700",
  },
  usernameText: {
    fontSize: 8,
    fontWeight: "700",
    opacity: 0.5,
  },
  Friends: {
    textAlign: "left",
    paddingLeft: 20,
    paddingBottom: 20,
    color: colors.primary,
    fontSize: fontHeader.fontSize,
    fontFamily: fontHeader.fontFamily,
    fontWeight: fontHeader.fontWeight,
  },
});
