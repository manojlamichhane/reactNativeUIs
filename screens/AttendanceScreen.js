import React from "react";
import { Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import AttendanceCard from "../components/AttendanceCard";

const AttendanceScreen = () => {
  return (
    <View
      style={{
        marginTop: 50,
        backgroundColor: "#6d5fdf",
        width: "100%",
        height: 100,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          padding: 20,
        }}
      >
        <Ionicons name="menu" size={30} color="white" />
        <Text
          style={{
            marginLeft: 80,
            fontSize: 25,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Attendance
        </Text>
      </View>
      <CalendarPicker
        width="300"
        headerWrapperStyle={{
          marginBottom: 40,
          backgroundColor: "white",
          width: "85%",
          height: 40,
          borderRadius: 50,
        }}
      />
      <View
        style={{
          marginTop: 80,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          paddingHorizontal: 30,
        }}
      >
        <Text style={{ fontSize: 15 }}>Total Working Days</Text>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 15,
            backgroundColor: "#6d5fdf",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>24</Text>
        </View>
      </View>
      <View
        style={{
          padding: 30,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <AttendanceCard color="#c45483" title="Total Absent" days="03" />
        <AttendanceCard color="#1badd4" title="Total Present" days="21" />
      </View>
    </View>
  );
};

export default AttendanceScreen;
