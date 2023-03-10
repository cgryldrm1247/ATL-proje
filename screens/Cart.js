import React, { useContext, useState, useEffect } from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";
import { CartContext } from "../CartContext";

export default function Cart() {
  const { items, getTotalPrice } = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);

    useEffect(() => {
      setTotal(getTotalPrice());
    }, [getTotalPrice]);

    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}></Text>
        <Text style={styles.mainTotal}>{total} tl</Text>
      </View>
    );
  }
  function renderItem({ item }) {
    return (
      <View stlye={styles.cartLine}>
        <Image style={styles.image} source={{ uri: item.images[0] }} />
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <Text style={styles.lineLeft}>
          {item.product ? item.product.title : "No title"} x {item.qty}
          <Text style={styles.productTotal}> = {item.totalPrice} tl</Text>
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.contentContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) =>
        item.product.id ? item.product.id.toString() : ""
      }
      ListFooterComponent={Totals}
    />
  );
}

const styles = StyleSheet.create({
  itemsListContainer: {
    backgroundColor: "#FFFFFF",
    paddingVertically: 8,
    marginHorizontal: 8,
  },
  itemsList: {
    backgroundColor: "#FFFFFF",
  },
  mainTotal: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  lineRight: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "left",
  },

  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "blue",
  },
  lineTotal: {
    fontWeight: "bold",
  },

  productTotal: {
    fontWeight: "bold",
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: 400,
    aspectRatio: 1,
    marginRight: 5,
  },
  cartLine: {
    flexDirection: "row",
    width: "80%",
    paddingVertical: 10,
  },
});
