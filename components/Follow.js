import React from "react";
import { Text, View } from "react-native";

const Follow = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#facf68",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.count}</Text>
      <Text style={{ fontSize: 20 }}>{props.title}</Text>
    </View>
  );
};

export default Follow;
