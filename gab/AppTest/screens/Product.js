import React from "react";
import { Text, View } from "react-native";

export default class Products extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button
          Text="fish"
          image={images.fish.uri}
          screen={"ProductsList"}
          navigation={this.props.navigation}
          data={this.state.data.filter((value) => value.category == 0)}
        ></Button>
      </View>
    );
  }
}
