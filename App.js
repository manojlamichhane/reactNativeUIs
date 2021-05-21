import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigation/TabNavigation";
import FoodsScreen from "./screens/FoodsScreen";
import FoodNavigation from "./navigation/FoodNavigation";
import FoodScreen from "./screens/FoodScreen";

export default function App() {
  return (
    <NavigationContainer>
      {/* <TabNavigation /> */}
      <FoodNavigation />
    </NavigationContainer>
    // <FoodScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
});
