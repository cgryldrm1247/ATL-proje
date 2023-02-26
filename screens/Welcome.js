import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext, useEffect } from "react";
import CartContext from "../CartContext";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const { login, user } = useContext(CartContext);

  const navigation = useNavigation();

  useEffect(() => {
    user && navigation.reset({ index: 0, routes: [{ name: "Products" }] });
  }, [user]);

  return (
    <View style={styles.welcomeContainer}>
      <Button title={'Giriş Yap, üye ol'} onPress={login} style={styles.login} />
      <Button title={'Üye olmadan devam et'} onPress={()=>navigation.navigate('Products')} />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    marginBottom: 10,
  },
  logout: {
    marginTop: 10,
  },
});

export default Welcome;
