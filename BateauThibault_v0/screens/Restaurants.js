import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Button from "../components/Button";
import { images } from "../constants/Images";
import Header from "../components/Header";

export default class Restaurants extends React.Component {
  state = {
    data: require("../assets/data/restaurants.json")
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>
          <Header navigation={this.props.navigation} />
          <Text style={{ marginVertical: 10, textAlign: "center" }}>
            Choisissez
          </Text>
          {
            this.state.data.map() => {
              return <Button text={x.name} key={index} screen="Home" navigation={this.props.navigation}></Button>
            }
          }
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
});
