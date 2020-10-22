import React from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { images } from "../constants/Images";
import Button from "../components/Button";
import Header from "../components/Header";

export default class RestaurantsList extends React.Component {
  state = {
    data: require("../assets/data/restaurants.json"),
  };

  render() {
    let restaurants = this.props.route.params.data
      ? this.props.route.params.data
      : [];

    return (
      <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>
          <Header navigation={this.props.navigation} />

          {restaurants != "sale"
            ? this.state.data
                .filter((el) => el.category == restaurants)
                .map((x, index) => {
                  return (
                    <Button
                      text={x.name}
                      key={index}
                      navigation={this.props.navigation}
                      image={images.poulpe.uri}
                    />
                  );
                })
            : this.state.data
                .filter((el) => el.sale)
                .map((x, index) => {
                  return (
                    <Button
                      text={x.name}
                      key={index}
                      navigation={this.props.navigation}
                      image={images.poulpe.uri}
                    />
                  );
                })}
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
