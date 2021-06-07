import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MusicButton = (props) => {
  return (
    <View
      style={{
        backgroundColor: props.clr,
        width: parseInt(props.size),
        height: parseInt(props.size),
        borderRadius: parseInt(props.size) / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={props.name} size={24} color="white" />
    </View>
  );
};

export default MusicButton;
