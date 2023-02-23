import {StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../screens/Welcome';
import ProductsList from '../screens/ProductsList';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import CartIcon from '../components/CartIcon';
import CartContext from '../CartContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const {user}= useContext(CartContext)

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={user?'Products':'Welcome'} >
      <Stack.Screen name="Welcome" component={Welcome} />

      <Stack.Screen
        name="Products"
        component={ProductsList}
        options={({ navigation }) => ({
          title: "Products",
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ navigation }) => ({
          title: "Product Details",
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({ navigation }) => ({
          title: "Cart",
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  
    text: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });

export default Navigation