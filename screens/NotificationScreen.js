import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScheduleCard from "../components/ScheduleCard";
import ButtonElement from "../components/ButtonElement";
import ExerciseCard from "../components/ExerciseCard";

const NotificationScreen = () => {
  return (
    <View style={{ marginTop: 30, padding: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Ionicons name="chevron-back" size={30} color="black" />
        <Ionicons name="options-outline" size={30} color="black" />
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Schedule</Text>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="md-calendar-outline" size={20} color="black" />
          <Text style={{ marginLeft: 10 }}>July 2020</Text>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <ScrollView horizontal>
          <ScheduleCard date="10" day="S" />
          <ScheduleCard date="11" day="S" active="true" />
          <ScheduleCard date="12" day="M" />
          <ScheduleCard date="13" day="T" />
          <ScheduleCard date="14" day="W" />
          <ScheduleCard date="15" day="T" />
          <ScheduleCard date="16" day="F" />
        </ScrollView>
      </View>
      <View style={{ marginLeft: 165, width: 150 }}>
        <ButtonElement title="See Detail" />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            marginLeft: 25,
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Choose Exercise
        </Text>
        <ScrollView>
          <View>
            <ExerciseCard />
            <ExerciseCard />
          </View>
        </ScrollView>
        <View style={{ marginTop: 30, width: 315 }}>
          <ButtonElement title="Continue" />
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;
