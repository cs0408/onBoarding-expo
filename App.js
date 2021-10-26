import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// screen
import { OnBoardings } from "./src/screens";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="OnBoarding"
            component={OnBoardings}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <StatusBar /> */}
    </>
  );
};
