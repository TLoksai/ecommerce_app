import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <Button title="Proceed to Checkout" onPress={() => navigation.navigate("Checkout")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});

export default CartScreen;
