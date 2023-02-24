import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";
import { getProduct } from "./services/ProductsService.js";

export const CartContext = createContext();
 export function CartProvider(props) {
  const [user, setUser] = useState(false);
  const [items, setItems] = useState([]);
  
  function login() {
    setUser(true);
  }
  function logout() {
    setUser(false);
  };


  function addItemToCart(product) {
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id == product.id);
      if (!item) {
        return [
          ...prevItems,
          {
            id: product.id,
            qty: 1,
            product,
            totalPrice: product.price,
            images: product.images,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id == product.id) {
            item.qty = item.qty + 1;
            item.totalPrice += item.product.price;
          }
          return item;
        });
      }
    });
  }
  

  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <CartContext.Provider value={{ user,login,logout,items, getItemsCount, addItemToCart, getTotalPrice }}>
      {props.children}
    </CartContext.Provider>
  );
};


const styles = StyleSheet.create({});

export default CartContext;
