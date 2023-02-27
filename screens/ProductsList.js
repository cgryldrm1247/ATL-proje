import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { getProducts } from "../services/ProductsService.js";
import { Product } from "../components/Product";
import { useNavigation } from "@react-navigation/native";
import CartContext from "../CartContext.js";

function ProductsList() {
  const navigation = useNavigation();

  const { logout } = useContext(CartContext);

  function renderProduct({ item: product }) {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate("ProductDetails", { productId: product.id });
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    getProduct();
  }, []);
  if (!products) return null;

  const handleLogout = () => {
    logout();
    navigation.navigate("Welcome");
  };

  return (
    <>
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
      />
      <Button onPress={handleLogout} title={"Çıkış Yap"}></Button>
    </>
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "black",
    paddingVertical: 10,
  },
});

export default ProductsList;