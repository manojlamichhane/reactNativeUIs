import React from "react";
import { Text, View } from "react-native";
import { FontAwesome, SimpleLineIcons } from "@expo/vector-icons";

const ExerciseCard = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 70,
        borderRadius: 25,
        backgroundColor: "white",
        justifyContent: "center",
        marginVertical: 5,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 20,
            backgroundColor: "#ebeee5",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          <FontAwesome name="dollar" size={24} color="black" />
        </View>
        <View style={{ marginLeft: 30 }}>
          <Text>Push Ups</Text>
          <Text>50 Push Ups</Text>
        </View>
        <View
          style={{
            width: 80,
            height: 30,
            backgroundColor: "#f6cb65",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <Text>150 cal</Text>
        </View>
        <SimpleLineIcons name="options-vertical" size={18} color="black" />
      </View>
    </View>
  );
};

export default ExerciseCard;
