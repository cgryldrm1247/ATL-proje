import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import CartContext from "../CartContext";

export function Product(props) {
    console.log(props,'');
    const {brand, description,category, images, name, price,thumbnail,onPress} = props;

  const { user } = useContext(CartContext);
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} >
      <Text
        onPress={
          user
            ? () => console.log("favoriye eklendi")
            : () => navigation.navigate("Welcome")
        }
      >
        favoriye ekle
      </Text>
      <Image style={styles.image} source={{uri:thumbnail}} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{brand}</Text>
        <Text style={styles.name}>{description}</Text>
        <Text style={styles.name}>{category}</Text>
        <Text style={styles.price}> {price} tl</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4%",
  },
  image: {
    width: 100,
    height: 100,

    aspectRatio: 1,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
});
