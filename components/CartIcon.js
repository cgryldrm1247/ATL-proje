import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { CartContext } from "../CartContext";

 function CartIcon({navigation}) {
  const { getItemsCount } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => navigation.navigate("Cart")}>
        Cart ({getItemsCount()})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "orange",
    height: 30,
    paddingHorizontal: 12,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
});
export default CartIcon;
