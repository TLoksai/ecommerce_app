import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={styles.scene}>
    <Text>Trending Products</Text>
  </View>
);

const SecondRoute = () => (
  <View style={styles.scene}>
    <Text>Best Sellers</Text>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const HeroScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Trending" },
    { key: "second", title: "Best Sellers" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "blue" }}
      style={{ backgroundColor: "white" }}
      labelStyle={{ color: "black", fontWeight: "bold" }}
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  // Sample Categories Data
  const categories = [
    { id: "1", name: "Mobiles", image: "https://via.placeholder.com/100" },
    { id: "2", name: "Laptops", image: "https://via.placeholder.com/100" },
    { id: "3", name: "Fashion", image: "https://via.placeholder.com/100" },
    { id: "4", name: "Home & Kitchen", image: "https://via.placeholder.com/100" },
  ];

  return (
    <View style={styles.container}>
      {/* Hero Banner */}
      <Image
        source={{ uri: "https://via.placeholder.com/400x200" }}
        style={styles.banner}
      />

      {/* Top Tabs */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />

      {/* Categories Section */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.categoryContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryBox}>
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  banner: { width: "100%", height: 200, resizeMode: "cover" },
  scene: { flex: 1, alignItems: "center", justifyContent: "center" },
  categoryContainer: { padding: 10 },
  categoryBox: {
    flex: 1,
    margin: 10,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
  categoryImage: { width: 80, height: 80, marginBottom: 10 },
  categoryText: { fontSize: 16, fontWeight: "bold" },
});

export default HeroScreen;
