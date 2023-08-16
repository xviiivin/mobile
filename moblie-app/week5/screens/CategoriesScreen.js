import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const MealsNavigator = createNativeStackNavigator();

const CategoriesScreen = (MealsNavigator) => {
  const renderGridItem = (itemData) => {
    return (
      // console.log(itemData)
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          MealsNavigator.navigate("CategoryMealsScreen", { prev: "CategoryMealsScreen", id: 1 })}}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4a148c",
  },
});

export default CategoriesScreen;
