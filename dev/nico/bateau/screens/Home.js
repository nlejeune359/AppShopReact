import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import Button from '../components/Button';
import { images } from '../constants/Images'

export default function Home(props) {

    return <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>

            <Text style={styles.header}>Le bateau de Thibault</Text>
            <Text>Vente en direct de notre bateau</Text>
            <Text>Produits selon la saison, Livraisons sur Paris</Text>
            <Text>06.63.99.99.78</Text>
            <Text>lebateaudethibault@gmail.com</Text>
            <Text>www.facebook.com/lebateaudethibault</Text>

            <Text style={styles.test}>
                <Button image={images.poisson.uri} screen="Products" text="Produits et Promotions" navigation={props.navigation}></Button>
            </Text>

            <Text style={styles.test}>
                <Button image={images.ancre.uri} screen="Cart" text="Bateaux" navigation={props.navigation}></Button>
                <Button image={images.ancre.uri} screen="Cart" text="Bateaux" navigation={props.navigation}></Button>
            </Text>

            <Text style={styles.test}>
                <Button image={images.ancre.uri} screen="Cart" text="Bateaux" navigation={props.navigation}></Button>
                <Button image={images.ancre.uri} screen="Cart" text="Bateaux" navigation={props.navigation}></Button>
            </Text>

        </ImageBackground>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    header: {
        position: 'relative',
        top: '0%',
        textAlign: 'center',
        color: "#FFF",
        fontStyle: 'italic',
        fontSize: 30,
    },

    text: {
        color: "white",
        fontStyle: 'italic',
        fontFamily: 'normal',
        fontSize: 30,
        fontWeight: "bold"
    },

    test: {
        flexDirection: "column",
    },
})