//page qui permet d'afficher les categories
//il faut effectuer la requette ici

import React from "react";
import { Text, View } from "react-native";

export default class Category extends React.Component {
    render() {
        return <View><Text>Category</Text></View>;
      <View>
        <Text>Home</Text>
        <Button
          Text="fish"
          image={images.fish.uri}
          screen={"ProductsList"}
          navigation={this.props.navigation}
          data={this.state.data.filter(value => value.category==0)}
        ></Button>
      </View>
    }
}