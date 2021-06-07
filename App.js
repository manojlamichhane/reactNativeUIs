import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigation/TabNavigation";
import FoodsScreen from "./screens/FoodsScreen";
import FoodNavigation from "./navigation/FoodNavigation";
import FoodScreen from "./screens/FoodScreen";
import AttendanceScreen from "./screens/AttendanceScreen";
import ClockScreen from "./screens/ClockScreen";
import Playing from "./screens/Playing";

export default function App() {
  return (
    // <NavigationContainer>
    //   <TabNavigation />
    //   <FoodNavigation />
    // </NavigationContainer>
    // <FoodScreen />
    // <AttendanceScreen />
    // <ClockScreen title="NST" hr="5" mi="45" />
    <Playing />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
});
