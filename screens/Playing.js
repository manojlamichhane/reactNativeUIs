import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Ionicons, SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import MusicButton from "../components/MusicButton";
import MusicProgress from "../components/MusicProgress";

const Playing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titlebar}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
          <Text style={styles.subtitle}>Playing Now</Text>
          <Ionicons name="heart-outline" size={30} color="white" />
        </View>
      </View>
      <View style={styles.body}>
        <View style={{ marginTop: 130, alignItems: "center" }}>
          <Text style={styles.title}>Bleed It Out</Text>
          <Text style={styles.subtitle}>Linkin Park</Text>
        </View>
        <View style={styles.musiccontroller}>
          <MusicButton name="skip-previous-outline" size="50" clr="#2a1f62" />
          <MusicButton name="pause" size="70" clr="#ea8533" />
          <MusicButton name="skip-next-outline" size="50" clr="#2a1f62" />
        </View>
        <MusicProgress size="90" />
        <View style={styles.musicoptions}>
          <Ionicons name="shuffle-sharp" size={24} color="white" />
          <Ionicons name="ios-download-outline" size={24} color="white" />
          <Ionicons name="share-outline" size={24} color="white" />
          <Ionicons name="ios-options-sharp" size={24} color="white" />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footercontainer}>
          <Text style={{ color: "white" }}>Recomendation</Text>
          <SimpleLineIcons name="options" size={24} color="white" />
        </View>
        <View style={styles.recommendation}>
          <Image
            style={{ width: 30, height: 30, borderRadius: 15 }}
            source={{
              uri: "https://m.media-amazon.com/images/M/MV5BYmZjOGYzYjYtMTVhZi00NTBmLWI3MjYtMTIwZGJhOTlmNGE4XkEyXkFqcGdeQXVyNzQwMzAwNTI@._V1_.jpg",
            }}
          />
          <View>
            <Text style={{ color: "white" }}>Numb</Text>
            <Text style={{ color: "white" }}>Linkin Park</Text>
          </View>
          <Ionicons name="play-circle-outline" size={30} color="white" />
        </View>
      </View>
      <View style={styles.musiclabel}>
        <Image
          source={{
            uri: "https://cdn.shopify.com/s/files/1/0253/9018/6559/products/114640.jpg?v=1589507069",
          }}
          style={styles.musicimage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 30, flex: 1 },
  header: { backgroundColor: "#140d36", flex: 0.28 },
  titlebar: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: { backgroundColor: "#1b1246", flex: 0.55 },
  subtitle: { color: "white", fontSize: 18 },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  musiccontroller: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10,
  },
  musicoptions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  footer: { backgroundColor: "#140d36", flex: 0.17 },
  footercontainer: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  recommendation: {
    backgroundColor: "#1b1246",
    height: 50,
    borderRadius: 20,
    marginHorizontal: 15,
    width: "91%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  musiclabel: {
    position: "absolute",
    top: 70,
    left: 60,
    backgroundColor: "#291c52",
    height: 240,
    width: 240,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  musicimage: {
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 15,
    borderColor: "#351d67",
  },
});
export default Playing;
