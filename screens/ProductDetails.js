import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { getProduct } from "../services/ProductsService.js";
import { CartContext } from "../CartContext";

function ProductDetails({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  const getItem = async (productId) => {
    const data = await getProduct(productId);
    setProduct(data);
  };
  useEffect(() => {
    getItem(productId);
  }, []);

  const { addItemToCart } = useContext(CartContext);

  function onAddToCart() {
    addItemToCart(product.id);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={product.images} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.title}</Text>
          <Text style={styles.price}>{product.price}tl</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button onPress={onAddToCart} title="sepete ekle" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
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
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});

export default ProductDetails;
