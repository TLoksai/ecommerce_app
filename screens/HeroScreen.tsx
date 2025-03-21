import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const FirstRoute = () => (
  <View className="flex-1 items-center justify-center bg-gray-100 p-4">
    <Image 
      source={{ uri: "https://via.placeholder.com/400x300" }} 
      className="w-11/12 h-48 rounded-lg"
    />
    <Text className="text-xl font-bold text-black mt-4">Trending Products</Text>
  </View>
);

const SecondRoute = () => (
  <View className="flex-1 items-center justify-center bg-gray-100 p-4">
    <Image 
      source={{ uri: "https://via.placeholder.com/400x300" }} 
      className="w-11/12 h-48 rounded-lg"
    />
    <Text className="text-xl font-bold text-black mt-4">Best Sellers</Text>
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
    { id: "1", name: "Mobiles", image: require("../assets/images/mobile.png") },
    { id: "2", name: "Laptops", image: require("../assets/images/laptop.jpg") },
    { id: "3", name: "Fashion", image: require("../assets/images/rectangle22.png") },
    { id: "4", name: "Home & Kitchen", image: require("../assets/images/homekitchen.jpeg") },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Hero Banner */}
      <Image
        source={{ uri: "https://via.placeholder.com/400x200" }}
        className="w-full h-52 object-cover"
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
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-1 m-2 bg-gray-100 rounded-lg overflow-hidden">
            <Image 
              source={typeof item.image === "string" ? { uri: item.image } : item.image} 
              className="w-full h-32 object-cover"
            />
            <Text className="text-lg font-bold text-black text-center my-2">{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HeroScreen;
