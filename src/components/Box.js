import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import StoriesBitmoji from "../components/StoriesBitmoji";
export default function Box({ children, style, name = 'Me', background, img = 'default', format = 'd' }) {
  //have background image be an option
  var backgroundImg = '';

  var bitmoji = require("../../assets/snapchat/personalBitmoji.png");

  if (img === 'ai') {
    bitmoji = require('../../assets/bitmoji/AvatarIcon.png');
  }
  if (img === 'tati') {
    bitmoji = require('../../assets/bitmoji/Tati.png');
  }
  if (img === 'Katie') {
    bitmoji = require("../../assets/bitmoji/Katie.png");
  }
  if (img === 'JohnSmith') {
    bitmoji = require("../../assets/bitmoji/JohnSmith.png");
  }
  if (img === 'Mateo') {
    bitmoji = require("../../assets/bitmoji/Mateo.png");
  }
  if (img === 'Jess') {
    bitmoji = require("../../assets/bitmoji/JessBitmoji.png");
  }


  if (background) {
    backgroundImg = require('../../assets/backgrounds/ResourcesBackgroundFirst.png');
  }
  else {
    backgroundImg = require('../../assets/backgrounds/JournalsBackground.png');
  }

  return (
    <View style={[styles.box]}>
      <ImageBackground style={[styles.imageBackground]} resizeMode='cover' source={backgroundImg}>
        <View style={styles.innerContainer}>
          <View style={styles.myBitmoji}>
            <View style={styles.userAlignment}>
              <Image style={styles.bitmojiImage} source={bitmoji} />
            </View>
            <View style={styles.userAlignment}>
              <Text style={styles.userText}>{name}</Text>
            </View>
          </View>
          <Text style={styles.text}>{children}</Text>
          {format === 'p' && (
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/backgrounds/Boston-Public-Garden.webp')} style={styles.additionalImage} />
            </View>
          )}
          {format === 'a' && (
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/backgrounds/audio.png')} style={styles.audioImage} />
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  additionalImage: {
    width: '100%', // Set the width as needed
    height: 200, // Set the height as needed
    resizeMode:'contain',
    borderRadius: 10,
  }, 
  audioImage:{
    bottom: 10,
    width: 300,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  box: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    borderRadius: 18,
    padding: 10,
    overflow: "hidden",
  },
  innerContainer: {
    flex: 1,
  },
  text: {
    fontSize: 17,
    textAlign: "left",
    color: "white",
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 10,
  },
  myBitmoji: {
    alignItems: "flex-start",
    paddingBottom: 5,
    flexDirection: 'row',
  },
  bitmojiImage: {
    width: 40,
    height: 40,
  },
  userText: {
    color: 'white',
    flex: 1,
    marginTop: 10,
    paddingLeft: 5,
  },
  userAlignment: {
  }
})