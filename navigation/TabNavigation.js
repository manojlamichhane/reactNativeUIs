import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";

const TabNavigation = () => {
  const TabNavigator = createBottomTabNavigator();
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: "#08565b",
        activeBackgroundColor: "#08565b",
        showLabel: false,
      }}
    >
      <TabNavigator.Screen
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-home-outline" size={24} color="white" />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <TabNavigator.Screen
        name="Notification"
        options={{
          tabBarIcon: () => (
            <Ionicons name="notifications-outline" size={24} color="white" />
          ),
        }}
        component={NotificationScreen}
      />
      <TabNavigator.Screen
        name="Navigation"
        options={{
          tabBarIcon: () => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: "white",
                marginBottom: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#e56060",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="ios-navigate-outline" size={24} color="white" />
              </View>
            </View>
          ),
        }}
        component={HomeScreen}
      />
      <TabNavigator.Screen
        name="Location"
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-location-outline" size={24} color="white" />
          ),
        }}
        component={HomeScreen}
      />
      <TabNavigator.Screen
        name="Profile"
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="ios-person-circle-outline"
              size={24}
              color="white"
            />
          ),
        }}
        component={HomeScreen}
      />
    </TabNavigator.Navigator>
  );
};

export default TabNavigation;
