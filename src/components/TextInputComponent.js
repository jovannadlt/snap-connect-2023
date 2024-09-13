import React, { useState } from 'react';
import { TextInput, View, Image, Text, StyleSheet, InputAccessoryView, Button } from 'react-native';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const TextInputComponent = (props) => {
  const inputAccessoryViewID = 'uniqueID';

  return (
    <>
      <View style={[styles.container, { backgroundColor: 'white' }]}>
        <View style={styles.myBitmoji}>
          <View style={styles.userAlignment}>
            <Image
              style={styles.bitmojiImage}
              source={require("../../assets/bitmoji/Tati.png")}
            />
          </View>
          <View style={styles.userAlignment}>
            <Text style={styles.userText}>Me</Text>
          </View>
        </View>

        <TextInput
          style={[styles.input]}
          value={props.text}
          onChangeText={props.onSaveText}
          inputAccessoryViewID={inputAccessoryViewID}
          placeholder="Type something..."
          multiline={true}
          autoFocus={true}
        />
      </View>
      <InputAccessoryView nativeID={inputAccessoryViewID} style={styles.accessory}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 2 }}>
          <IconButton icon={props => <Icon name="camera" {...props} />} />
          <IconButton icon={props => <Icon name="microphone" {...props} />} />
          <IconButton icon={props => <Icon name="emoticon-happy" {...props} />} />
          <IconButton icon={props => <Icon name="image" {...props} />} />
          <IconButton icon={props => <Icon name="robot" {...props} />} />
          </View>
      </InputAccessoryView>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    borderRadius: 10,
  },
  myBitmoji: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userAlignment: {
    marginRight: 8,
  },
  bitmojiImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  input: {
    width: '100%',
    height: 'auto',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    borderRadius: 10,
  },
  accessory: {
    flexDirection: 'column',
    backgroundColor: 'black',
  }
});

export default TextInputComponent;