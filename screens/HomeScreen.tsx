import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import trendingImage from "../assets/images/trend.jpeg";
import bestsellersImage from "../assets/images/best.webp";


const FirstRoute = () => (
  <View style={styles.card}>
    <Image source={trendingImage} style={styles.routeImage} />
    <Text style={styles.routeText}>Trending Products</Text>
  </View>
);

const SecondRoute = () => (
  <View style={styles.card}>
    <Image source={bestsellersImage} style={styles.routeImage} />
    <Text style={styles.routeText}>Best Sellers</Text>
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
      style={{ backgroundColor: "blue" }}
      labelStyle={{ color: "black", fontWeight: "bold" }}
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  // Sample Categories Data
  const categories = [
    { id: "1", name: "Mobiles", image: require("../assets/images/mobile.png") },
    { id: "2", name: "Laptops", image: require("../assets/images/laptop.jpg") },
    { id: "3", name: "Fashion", image: require("../assets/images/Rectangle 22.png") }, // ✅ Local image fixed
    { id: "4", name: "Home & Kitchen", image: require("../assets/images/homekitchen.jpeg") },
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
            <Image 
              source={typeof item.image === "string" ? { uri: item.image } : item.image} // ✅ Corrected image handling
              style={styles.categoryImage} 
            />
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
 card: {
  width: "90%", 
  backgroundColor: "#f0f0f0", 
  padding: 20, 
  marginVertical: 15,
  borderRadius: 15, 
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 5,
},
routeImage: {
  width: "100%", 
  height: 250, 
  resizeMode: "cover", 
  borderRadius: 10,
  marginBottom: 15,
},
routeText: {
  fontSize: 20, 
  fontWeight: "bold", 
  color: "black",
},

  categoryImage: { width: 80, height: 80, marginBottom: 10 },
  categoryText: { fontSize: 16, fontWeight: "bold" },
});

export default HeroScreen;
