import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const ButtonElement = (props) => {
  return (
    <View>
      <Button
        color="white"
        style={{
          backgroundColor: "#f86968",
          width: "100%",
          height: 50,
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={null}
      >
        {props.title}
      </Button>
    </View>
  );
};

export default ButtonElement;
