import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Follow from "../components/Follow";
import Line from "../components/Line";

const HomeScreen = () => {
  return (
    <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Ionicons name="menu" size={30} color="black" />
        <AntDesign name="message1" size={24} color="black" />
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hi Hira</Text>
        <Image
          style={{ width: 40, height: 40, borderRadius: 20 }}
          source={{
            uri: "https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Home</Text>
        <Text style={{ fontSize: 20 }}>Walk</Text>
        <Text style={{ fontSize: 20 }}>Run</Text>
        <Text style={{ fontSize: 20 }}>Ride</Text>
      </View>
      <Line />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 40,
          marginHorizontal: 10,
        }}
      >
        <Follow count="125" title="Following" />
        <Follow count="1.5K" title="Followers" />
      </View>
      <View
        style={{
          marginHorizontal: 40,
          width: 240,
          height: 240,
          borderRadius: 120,
          borderWidth: 3,
          borderStyle: "dashed",
          borderColor: "#facf68",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>Today's Steps</Text>
        <Text style={{ fontSize: 40, fontWeight: "bold", marginVertical: 10 }}>
          8091
        </Text>
        <Text style={{ fontSize: 20 }}>Goal: 15000</Text>
        <Text style={{ fontSize: 15 }}>Level Secondary</Text>
      </View>
      <View
        style={{
          position: "absolute",
          top: 505,
          left: 122,
          backgroundColor: "#e56060",
          padding: 10,
          borderRadius: 20,
          alignItems: "center",
          width: 120,
        }}
      >
        <Text style={{ color: "white" }}>My Goals</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "#facf68",
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 20,
          }}
        >
          <Text>Calories: 250</Text>
        </View>
        <Text>km: 8.2</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
