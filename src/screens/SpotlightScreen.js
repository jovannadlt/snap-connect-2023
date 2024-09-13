import React from "react";
import { View, Text , StyleSheet} from "react-native";
export default function SpotlightScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
  },
  centeredContent: {
    alignItems: 'center', 
  },
});

