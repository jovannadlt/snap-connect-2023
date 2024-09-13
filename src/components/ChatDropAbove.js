import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import IconButton from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function ChatDropAbove({}) {
  const navigation = useNavigation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [arrowDirection, setArrowDirection] = useState('up');

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
    setArrowDirection(arrowDirection === 'down' ? 'up' : 'down');
  };

  const handleDropdownItemPress = (item, navTo) => {
    navigation.navigate(navTo);
    setShowDropdown(false);
    setArrowDirection('up');
  };

  const dropdownItems = [
    { label: 'map', icon: 'map', nav: 'SnapConnectHome' }
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDropdownToggle}>
        <View style={styles.arrowContainer}>
          <IconButton name={`keyboard-arrow-${arrowDirection}`} size={Dimensions.get('window').width * 0.08} color="black" />
        </View>
      </TouchableOpacity>

      {showDropdown && (
        <View style={styles.dropdownMenu}>
          {dropdownItems.map((item) => (
            <TouchableOpacity
              key={item.label}
              onPress={() => navigation.navigate(item.nav)}
              style={styles.dropDownItem}
            >
              <Image source={require('../../assets/Frame.png')} style={styles.dropdownImage} />
            </TouchableOpacity>
          ))}
        </View>
      )}

      <TouchableOpacity onPress={() => console.log('Chat button pressed')} style={styles.chatButtonContainer}>
        <View style={styles.chatButton}>
          <Image source={require('../../assets/IconButton.png')} style={styles.chatButtonImage} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.5, // Adjust based on your design
  },
  arrowContainer: {
    width: Dimensions.get('window').width * 0.12,
    height: Dimensions.get('window').width * 0.12,
    borderRadius: Dimensions.get('window').width * 0.12 * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  dropdownMenu: {
    marginTop: 3,
  },
  dropDownItem: {
    width: Dimensions.get('window').width * 0.12,
    height: Dimensions.get('window').width * 0.12,
    borderRadius: Dimensions.get('window').width * 0.12 * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  chatButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  chatButton: {
    width: Dimensions.get('window').width * 0.12,
    height: Dimensions.get('window').width * 0.12,
    borderRadius: Dimensions.get('window').width * 0.12 * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  dropdownImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Maintain aspect ratio
  },
  chatButtonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Maintain aspect ratio
  },
});
