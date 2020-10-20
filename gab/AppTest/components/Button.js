import React from 'react';
import TouchableOpacity from "react-native";
import Image from '../constants/Images';

export default function Button(props) {
  return (
    <TouchableOpacity
      style={style.Container}
      onPress={() =>
        props.navigation.navigate(props.screen, {
          data: props.data ? props.data : [],
        })
      }
    >
      {props.image && (
        <Image
          source={props.image}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
      )}
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}
