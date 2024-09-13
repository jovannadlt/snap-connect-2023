import React from "react";
import { Ionicons } from "react-native-vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserTab from "./UserTab";
import ConversationScreen from "../screens/ConversationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Journals from "../screens/JournalScreen";
import Mentorship from "../screens/Mentorship";
import Hobbies from "../screens/Hobbies";
import Resources from "../screens/Resources";
import SnapConnectHome from "../screens/SnapConnectHome"
import AddPostScreen from "../screens/AddPostScreen"
import AddPostResources from "../screens/AddPostResources"
import { Button } from "react-native";

const Stack = createStackNavigator();

export default function () {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerShown: false,
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={30}
              color="black"
              style={{ marginLeft: 10 }}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
        })}
      >
        <Stack.Screen name="UserTab" component={UserTab} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Conversation"
          component={ConversationScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Journals"
          component={Journals}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Mentorship"
          component={Mentorship}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Hobbies"
          component={Hobbies}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Resources"
          component={Resources}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="SnapConnectHome"
          component={SnapConnectHome}
          options={{ headerShown: true, title: 'Snap Connect' }}
          />
        <Stack.Screen
          name="AddPostScreen"
          component={AddPostScreen}
          options={{
            headerShown: true, 
            title: 'Add Post',
            headerRight: () => (
              <Button title="Submit"/>
            ),
          }} />
          <Stack.Screen
          name="AddPostResources"
          component={AddPostResources}
          options={{
            headerShown: true, 
            title: 'Add Post',
            headerRight: () => (
              <Button title="Submit"/>
            ),
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
