import { View, Text, StyleSheet,Button } from "react-native";
import React, { useContext, useEffect } from "react";
import CartContext from "../CartContext";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const { login, logout, user } = useContext(CartContext);
  const navigation = useNavigation();
  useEffect(() => {
    user && navigation.reset({ index: 0, routes: [{ name: "Products" }] });
  }, [user]);

  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.login} onPress={login}>
        Giriş Yap
      </Text>
      <Text
        style={styles.logout}
        onPress={() => navigation.navigate("Products")}
      >
        üye olmadan devam et
      </Text>
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
