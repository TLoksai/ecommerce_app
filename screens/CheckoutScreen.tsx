import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CheckoutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Button title="Confirm Order" onPress={() => alert("Order Placed!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});

export default CheckoutScreen;
