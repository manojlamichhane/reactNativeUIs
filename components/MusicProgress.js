import React from "react";
import { View } from "react-native";

const MusicProgress = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 15,
        marginTop: 20,
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#ea8533",
          width: parseInt(props.size) * 3,
          height: 3,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "white",
          width: 20,
          height: 20,
          borderRadius: 10,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "white",
          width: (100 - parseInt(props.size)) * 3,
          height: 3,
        }}
      ></View>
    </View>
  );
};

export default MusicProgress;
