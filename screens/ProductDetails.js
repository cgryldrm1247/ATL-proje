import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { getProduct } from "../services/ProductsService.js";
import { CartContext } from "../CartContext";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function ProductDetails({ route }) {
  const navigation = useNavigation();
  const { user } = useContext(CartContext);
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  const [liked, setLiked] = useState(false);
  const { addItemToCart } = useContext(CartContext);

  const handleLike = async () => {
    const newLiked = !liked;
    setLiked(newLiked);
    try {
      await AsyncStorage.setItem(`liked-${productId}`, JSON.stringify(newLiked));
    } catch (error) {
      console.log("Error saving liked state", error);
    }
  };

  const loadLikedState = async () => {
    try {
      const savedLikedState = await AsyncStorage.getItem(`liked-${productId}`);
      if (savedLikedState !== null) {
        setLiked(JSON.parse(savedLikedState));
      }
    } catch (error) {
      console.log("Error loading liked state", error);
    }
  };

  function onAddToCart() {
    addItemToCart(product);
  }

  useEffect(() => {
    async function getItem(productId) {
      const data = await getProduct(productId);
      setProduct(data);
      loadLikedState();
    }
    getItem(productId);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: product.thumbnail }} />
        </View>

        <View style={styles.likebutton}>
          <TouchableOpacity
            onPress={user ? handleLike : () => navigation.navigate("Welcome")}
          >
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={40}
              color={liked ? "red" : "black"}
            />
            {liked}
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.title}</Text>
          <Text style={styles.price}>{product.price}tl</Text>
          <Text style={styles.rating}> puan = {product.rating}</Text>
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
    width: "50%",
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
  likebutton: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductDetails;
