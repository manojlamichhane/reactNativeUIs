import React from "react";
import { Text, View, Image } from "react-native";

const FoodItem = (props) => {
  return (
    <View style={{ height: 155, marginBottom: 20 }}>
      <View
        style={{
          width: 155,
          height: 155,
          borderRadius: 80,
          borderWidth: 2,
          borderStyle: "dashed",
          borderColor: "#f6cb65",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 130, height: 130, borderRadius: 65 }}
          source={{
            uri: props.image,
          }}
        />
      </View>
      <View
        style={{
          width: 155,
          height: 75,
          borderTopLeftRadius: 75,
          borderTopRightRadius: 75,
          backgroundColor: "#f5d9ab",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          bottom: 70,
        }}
      >
        <Text>{props.title}</Text>
        <Text>{props.desc}</Text>
        <Text>{`$${props.price}`}</Text>
      </View>
    </View>
  );
};

export default FoodItem;
