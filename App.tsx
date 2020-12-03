import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import { Onboarding } from "./src/Authentication";
import { LoadAssets } from "./src/components";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProText-SemiBold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
};

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
  </AuthenticationStack.Navigator>
);

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
