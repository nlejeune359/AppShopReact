import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import Button from "../components/Button";
import { images } from "../constants/Images";
import Header from "../components/Header";
import { boat } from "../constants/Boat";

export default class ShipDetails extends React.Component {
  render() {
    let shipName = this.props.route.params.data
      ? this.props.route.params.data
      : "";

    return (
      <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>
          <Header navigation={this.props.navigation} />

          <Text style={styles.title}>{boat[shipName].name}</Text>
          <Image source={boat[shipName].image}></Image>
          <Text style={styles.text}>{boat[shipName].imat}</Text>

          <Text>{boat[shipName].description}</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  header: {
    position: "relative",
    top: "0%",
    textAlign: "center",
    color: "#FFF",
    fontStyle: "italic",
    fontSize: 30,
  },

  title: {
    color: "white",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
  },

  text: {
    color: "#000",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },

  test: {
    flexDirection: "row",
  },
});