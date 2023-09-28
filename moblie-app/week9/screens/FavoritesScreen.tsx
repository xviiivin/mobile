import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

export const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state: any) => state.meals.favoriteMeals)
  return (
    favMeals.length === 0 ?
      <View style={styles.screen}>
        <Text>The Favorites Screen!</Text>
        <Text>pls add to favorites list😁</Text>
      </View>
      :
      <MealList listData={favMeals} navigation={navigation} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
