import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const windowHeight = Dimensions.get('window').height;

export default function CommentSlideUp({ comment, onClose }) {
  return (
    <View style={[styles.slideUpContainer, { height: windowHeight * 5 / 9 }]}>
      <TouchableOpacity style={styles.slideUpCloseButton} onPress={onClose}>
        <Text style={styles.slideUpCloseButtonText}>Close</Text>
      </TouchableOpacity>
      <ScrollView
        vertical={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.storiesContainer}
      >
        <View style={styles.slideUpContent}>
          <Image
            source={require('../../assets/comments.png')}
            style={styles.image}
            resizeMode="contain" // Set the resizeMode to cover the whole section
          />
          <Text style={styles.slideUpDescription}>{comment.description}</Text>
          {/* Add any other contact information here */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  storiesContainer: {
    flexGrow: 1,
  },
  slideUpContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
  },
  slideUpCloseButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "flex-end",
  },
  slideUpCloseButtonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  slideUpContent: {
  },
  image: {
    width: '100%',
    height: '100%',
  },
  slideUpTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  slideUpDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
});
