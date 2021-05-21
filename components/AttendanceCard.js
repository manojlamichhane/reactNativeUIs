import React from "react";
import { Text, View } from "react-native";

const AttendanceCard = (props) => {
  return (
    <View
      style={{
        backgroundColor: props.color,
        width: 140,
        height: 170,
        borderRadius: 25,
        padding: 15,
      }}
    >
      <Text style={{ fontSize: 15, color: "white" }}>{props.title}</Text>
      <Text
        style={{ marginTop: 60, marginLeft: 43, fontSize: 60, color: "white" }}
      >
        {props.days}
      </Text>
    </View>
  );
};

export default AttendanceCard;
