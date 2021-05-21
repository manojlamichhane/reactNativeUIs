import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FoodsScreen from "../screens/FoodsScreen";
import { Entypo, Feather } from "@expo/vector-icons";

const FoodNavigation = () => {
  const foodsTab = createBottomTabNavigator();
  return (
    <foodsTab.Navigator tabBarOptions={{ showLabel: false }}>
      <foodsTab.Screen
        name="Home"
        options={{
          tabBarIcon: () => <Feather name="home" size={24} color="#cccccc" />,
        }}
        component={FoodsScreen}
      />
      <foodsTab.Screen
        name="Chat"
        options={{
          tabBarIcon: () => (
            <Feather name="message-square" size={24} color="#cccccc" />
          ),
        }}
        component={FoodsScreen}
      />
      <foodsTab.Screen
        name="Create"
        options={{
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: "#f8cd67",
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="plus" size={24} color="white" />
            </View>
          ),
        }}
        component={FoodsScreen}
      />
      <foodsTab.Screen
        name="Favourite"
        options={{
          tabBarIcon: () => <Feather name="heart" size={24} color="#cccccc" />,
        }}
        component={FoodsScreen}
      />
      <foodsTab.Screen
        name="Profile"
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="#cccccc" />,
        }}
        component={FoodsScreen}
      />
    </foodsTab.Navigator>
  );
};

export default FoodNavigation;
