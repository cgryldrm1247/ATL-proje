import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsList from "./screens/ProductsList";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import { CartProvider } from "./CartContext";
import Navigation from "./navigation/Navigation";




function App() {
  return (
    <CartProvider>
     <Navigation/>
    </CartProvider>
  );
}



export default App;
