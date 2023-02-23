import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import CartContext from "../CartContext";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const { login, logout, user } = useContext(CartContext);
  const  navigation  = useNavigation();
  useEffect(() => {
    user && navigation.reset({index: 0, routes: [{name: 'Products'}]});


  }, [user]);

  return (
    <View>
      <Text onPress={login}>Welcome</Text>
      <Text onPress={()=>navigation.navigate('Products')}>üye olmadan devam et</Text>
    </View>
  );
};

export default Welcome;
