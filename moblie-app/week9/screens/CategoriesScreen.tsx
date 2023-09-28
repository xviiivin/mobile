import React from "react";
import {
  FlatList,
  StyleSheet
} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

export const CategoriesScreen = ({navigation} : any) => {
  const renderGridItem = (itemData: any) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={ () => { navigation.navigate("CategoryMeals", {
            categoryid:itemData.item.id,
            categoryTitle:itemData.item.titlen
          }
        )}}
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
