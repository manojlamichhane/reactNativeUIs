import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FoodItem from "../components/FoodItem";

const FoodsScreen = () => {
  return (
    <View style={{ marginTop: 30, padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <Ionicons name="menu-outline" size={24} color="black" />
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 25,
            borderColor: "black",
            borderWidth: 1,
          }}
        >
          <Ionicons name="search" size={24} color="black" />
        </View>
      </View>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Today's Special</Text>
      <Text style={{ fontSize: 20 }}>Fresh food menu</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Pizza</Text>
        <Text style={{ fontSize: 20 }}>Pasta</Text>
        <Text style={{ fontSize: 20 }}>Salads</Text>
        <Ionicons name="md-options-outline" size={24} color="black" />
      </View>
      <View style={{ height: 440 }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <View style={{ marginTop: 50 }}>
              <FoodItem
                image="https://images.eatsmarter.com/sites/default/files/styles/1600x1200/public/seafood-pizza-with-garlic-and-tomatoes-551418.jpg"
                title="Seafood Pizza"
                desc="Olive with Cheese"
                price="22.00"
              />
              <FoodItem
                image="https://www.gimmesomeoven.com/wp-content/uploads/2012/08/shrimp-fra-diavolo-pizza-1.jpg"
                title="Shrim Pizza"
                desc="Cheese with shrimp"
                price="18.00"
              />
              <FoodItem
                image="https://d1uz88p17r663j.cloudfront.net/original/4274048cd5f17c49dfee280f77a3739d_Cheese-Pizza_HB-2.jpg"
                title="Cheese Pizza"
                desc="Cheese wit"
                price="24.00"
              />
            </View>
            <View>
              <FoodItem
                image="https://images.squarespace-cdn.com/content/v1/549367d9e4b0b0a3e2543543/1589554352224-UK7W7S69JCEBCLPLEENA/ke17ZwdGBToddI8pDm48kDjwVHRmO1GEUjowCwxdoiN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ubg6LPef4bc8ja5vOP979_LvAERmXz6JvWPsUIelM9MY5ESbinAOb_piFJn_RiqNrQ/pizza+crust-1-3.jpg"
                title="Neapolitan "
                desc="sourdough pizza"
                price="21.00"
              />
              <FoodItem
                image="https://giordanos.com/wp-content/uploads/Hero-image_1210-v2.jpg"
                title="Chicago Pizza"
                desc="Deep Dished Pizza"
                price="25.00"
              />
              <FoodItem
                image="https://chowhound3.cbsistatic.com/2014/12/31228_tony_gemignani_la_regina_pizza_3000.jpg"
                title="Sicilian Pizza"
                desc="Thick-crust pizza"
                price="19.00"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default FoodsScreen;
