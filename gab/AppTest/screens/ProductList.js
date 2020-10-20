import React from "react";
import { Text, View } from "react-native";
import Products from "./Products";

export default class ProductsList extends React.Component {
  render() {
    let products = this.props.route.params.data
      ? this.props.route.params.data
      : [];
    return (
      <View style={styles.container}>
        <BackgroundImage />
        <Header navigation={this.props.navigation} />
        <Text style={{ marginVertical: 10, textAlign: "center" }}>
          Choose your products
        </Text>
        <View style={{ flex: 1 }}>
          {products.map((value, index) => {
            return <Products key={index} item={value} />;
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
