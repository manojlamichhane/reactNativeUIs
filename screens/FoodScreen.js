import React from "react";
import { Text, View, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const FoodScreen = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ backgroundColor: "#f7d9c1", borderBottomLeftRadius: 100 }}>
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Ionicons name="chevron-back" size={30} color="black" />
          <Ionicons name="options-outline" size={30} color="black" />
        </View>
        <View
          style={{
            paddingLeft: 50,
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Hawaiian with
          </Text>
          <Text style={{ fontSize: 30 }}>Fresh tomato</Text>
          <Text style={{ fontSize: 12 }}>
            Fresh cheez with Hawaiian pizza with fresh taste of tomatos and
            Hawaiian delivery in 25 minutes
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text>Small</Text>
        <View
          style={{
            width: 100,
            height: 40,
            borderRadius: 20,
            borderColor: "grey",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Medium</Text>
        </View>
        <Text>Large</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Image
          style={{
            width: 280,
            height: 280,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 40,
        }}
      >
        <View>
          <Text>Total Price</Text>
          <Text style={{ fontWeight: "bold" }}>$ 25.00</Text>
        </View>
        <View
          style={{
            backgroundColor: "black",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: 5,
            paddingLeft: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Text style={{ color: "white" }}>Buy Now</Text>
          <View
            style={{
              backgroundColor: "white",
              width: 30,
              height: 30,
              borderRadius: 150,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            <Feather name="shopping-bag" size={24} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodScreen;
