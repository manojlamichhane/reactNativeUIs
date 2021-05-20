import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ScheduleCard = (props) => {
  if (props.active) {
    return (
      <View
        style={{
          ...styles.container,
          width: 70,
          height: 110,
          borderRadius: 10,
          backgroundColor: "#fdca5e",
        }}
      >
        <Text style={{ fontSize: 25 }}>{props.date}</Text>
        <Text style={{ fontSize: 25 }}>{props.day}</Text>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </View>
    );
  } else {
    return (
      <View
        style={{
          ...styles.container,
          width: 50,
          height: 70,
          borderRadius: 10,
          backgroundColor: "#e8e8e8",
        }}
      >
        <Text style={{ fontSize: 20 }}>{props.date}</Text>
        <Text style={{ fontSize: 20 }}>{props.day}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
});
export default ScheduleCard;
