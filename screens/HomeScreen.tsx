import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import trendingImage from "../assets/images/trend.jpeg";
import bestsellersImage from "../assets/images/best.webp";

const FirstRoute = () => (
  <View style={styles.scene}>
    <Image source={trendingImage} style={styles.routeImage} />
    <Text style={styles.routeText}>Trending Products</Text>
  </View>
);

const SecondRoute = () => (
  <View style={styles.scene}>
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
      labelStyle={{ color: "white", fontWeight: "bold" }}
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const categories = [
    { id: "1", name: "Mobiles", image: require("../assets/images/mobile.png") },
    { id: "2", name: "Laptops", image: require("../assets/images/laptop.jpg") },
    { id: "3", name: "Fashion", image: require("../assets/images/Rectangle 22.png") }, 
    { id: "4", name: "Home & Kitchen", image: require("../assets/images/homekitchen.jpeg") },
    { id: "5", name: "Watches", image: require("../assets/images/watch.webp") },
    { id: "6", name: "TVs", image: require("../assets/images/tv.jpeg") },
    { id: "7", name: "Cameras", image: require("../assets/images/camers.jpeg") },
    { id: "8", name: "Shoes", image: require("../assets/images/shoes.jpeg") },
    { id: "9", name: "Furniture", image: require("../assets/images/funiture.webp") },
    { id: "10", name: "Toys", image: require("../assets/images/toys.jpeg") },
  ];

  return (
    <View style={styles.container}>
     
      <Image
        source={{ uri: "https://themewagon.com/wp-content/uploads/2020/10/MaleFashion-1200x736.png" }}
        style={styles.banner}
      />

 
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />

     
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.categoryContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryBox}>
            <Image 
              source={item.image} 
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
    borderRadius: 10,
    overflow: "hidden", 
  },
  routeImage: {
    width: "90%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  routeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  categoryImage: { 
    width: "100%", 
    height: 120, 
    resizeMode: "cover", 
  },
  categoryText: { 
    fontSize: 16, 
    fontWeight: "bold", 
    padding: 10, 
    textAlign: "center" 
  },
});

export default HeroScreen;
