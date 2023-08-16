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

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      // console.log(itemData)
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          {
            navigation.navigate("s2", {
              categoryid: itemData.item.id,
              categoryTitle: itemData.item.title,
            });
          }
        }}
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
  },
});

export default CategoriesScreen;
