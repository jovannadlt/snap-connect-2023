import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  FlatList,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fontHeader } from "../../assets/themes/font";
import { colors } from "../../assets/themes/colors";
import { getAuth, signOut } from "firebase/auth";
import StoriesBitmoji from "../components/StoriesBitmoji";
import DiscoverFeed from "../components/DiscoverFeed";
import { SafeAreaProvider } from "react-native-safe-area-context";


/* Discover FlatList will render a component in the list
 * for each object in the array DATA. This is just an example I took
 * from the FlatList documentation, so feel free to change the contents.
 */


export default function SpotlightScreen({ route, navigation }) {

  const insets = useSafeAreaInsets();
  

 
  return (

    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }]}>

  <ImageBackground style={styles.container} resizeMode='cover' source={require('../../assets/backgrounds/background.png')}>
      <ScrollView
        vertical={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.stories}
      >

      <Text style={styles.sectionSubHeader}>Connect with yourself.</Text>

      <ImageBackground style={styles.background} resizeMode='cover' source={require('../../assets/snap-connect-backgrounds/JournalsButton.png')}>
        <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Journals",{text: ''})}
        />
    </ImageBackground>
    <Text style={styles.sectionSubHeader}>Suggestions</Text>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.stories}
    >
      <View style={[
        styles.stories,
        {
          paddingLeft:20,
          flexDirection:'row',
          gap: 14,

        },
      ]}>
      <StoriesBitmoji Name="Jess" Username="jesswilliams" img='Jess' />
      <StoriesBitmoji Name="John Smith" Username="JohnSmith" img='JohnSmith' />
      <StoriesBitmoji Name="Katie" Username="katie123" img='Katie' /> 
      <StoriesBitmoji Name="Mateo" Username="Matteo" img='Mateo' />

      </View>
    </ScrollView>

    <Text style={styles.sectionSubHeader}>Community</Text>

    <ImageBackground style={styles.background} resizeMode='cover' source={require('../../assets/snap-connect-backgrounds/FY-ResourcesButton.png')}>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Resources")}
      />
    </ImageBackground>

    <ImageBackground style={styles.background} resizeMode='cover' source={require('../../assets/snap-connect-backgrounds/MentorshipButton.png')}>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Mentorship")}/>
    </ImageBackground>

      <ImageBackground style={styles.background} resizeMode='cover' source={require('../../assets/snap-connect-backgrounds/Non-profitsButton.png')}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Hobbies")}>
        </TouchableOpacity>
      </ImageBackground>

      <ImageBackground style={styles.background} resizeMode='cover' source={require('../../assets/snap-connect-backgrounds/Reconnect-Button.png')}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Hobbies")}>
        </TouchableOpacity>
      </ImageBackground>

      <ImageBackground style={styles.background} resizeMode='cover' source={require('../../assets/snap-connect-backgrounds/AdvocacyButton.png')}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Hobbies")}>
        </TouchableOpacity>
      </ImageBackground>
          </ScrollView>
</ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
  },
  storyBar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  stories: {
    display: "flex",
    width: "100%",
  },
  DiscoveryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sectionSubHeader: {
    textAlign: "left",
    color: colors.primary,
    fontSize: 20,
    fontFamily: fontHeader.fontFamily,
    fontWeight: fontHeader.fontWeight,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  loginBtn: {
		width:361,
		height:100,
		alignItems:"center",
		justifyContent:"center",
    textAlign: 'center',
    borderRadius: 10,
	},
   background: {
    margin: 10,
    width: 361,
    height: 100,
    alignSelf: 'center',
    flex:1,
    borderRadius: 8,
   },
});
