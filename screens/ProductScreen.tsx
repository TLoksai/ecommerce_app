import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});

export default ProductScreen;
