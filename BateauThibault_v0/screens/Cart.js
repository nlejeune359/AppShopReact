import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import { store } from "react-redux";

export default class Cart extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        {
            this.props.products.map((el, index) => {
                return <Product item={el} key={index}></Product>
            })
        }
      </View>
    );
  }
}

const mapStateToProps = state => {
    return {
        products: state.cart.products
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbb",
    alignItems: "center",
    margin: 5,
    padding: 10,
    flexDirection: "column",
    opacity: 0.8,
  },
});
