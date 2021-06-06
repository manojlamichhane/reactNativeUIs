import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import AnalogClock from "react-native-clock-analog";
import { Ionicons } from "@expo/vector-icons";

const ClockScreen = (props) => {
  const [hour, setHour] = useState(12);
  const [min, setMin] = useState(34);
  const [sec, setSec] = useState(56);

  useEffect(() => {
    let isMounted = true;
    setInterval(() => {
      let response1 = new Date().getUTCHours() + parseInt(props.hr);
      let response2 = new Date().getUTCMinutes() + parseInt(props.mi);
      response2 > 60 ? (response1++, (response2 = response2 - 60)) : null;
      response1 > 24 ? (response1 = response1 - 24) : null;
      if (isMounted) {
        setHour(response1);
        setMin(response2);
        setSec(new Date().getSeconds());
      }
    }, 1000);
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <View style={{ marginTop: 30 }}>
        <Ionicons name="menu" size={40} color="#dbd9db" />
      </View>
      <View style={{ paddingVertical: 50, alignItems: "center" }}>
        <AnalogClock
          //   key={Math.random()}
          colorClock="#f4d600"
          colorNumber="black"
          colorCenter="black"
          colorHour="black"
          colorMinutes="black"
          hour={hour}
          minutes={min}
          size={250}
        />
      </View>
      <View style={{ alignItems: "center", padding: 20 }}>
        <Text style={{ fontSize: 20, color: "black" }}>
          {hour}:{min}:{sec}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#f4d600",
          borderRadius: 20,
          marginVertical: 20,
          alignItems: "center",
          padding: 15,
        }}
      >
        <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default ClockScreen;
