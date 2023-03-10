import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";



export function Product(props) {
  const {
    brand,
    description,
    category,
    price,
    thumbnail,
    onPress,
    title,
    rating
  } = props;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.image} source={{ uri: thumbnail }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{brand}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.price}> {price} tl</Text>
        <Text style={styles.title}> {title}</Text>
        <Text style={styles.rating}> puan = {rating}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  favoruite:{
    position:'absolute',
    left:80

  },  
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
    borderRadius: 20,
    aspectRatio: 1,
    marginTop:16,

  },
  rating: {
    position: "absolute",
    left: 15,
    top: -40,
  },
  title: {
    position: "absolute",
    left: 15,
    top: -80,
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
  infoContainer: {
    marginTop:16,
    padding: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "300",
  },
  price: {
    position: "absolute",
    right: 20,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  category: {
    position: "absolute",
    left: 15,
    top: -110,
  },
});
