import React from "react";
import {
  StyleSheet,
  View
} from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

export const CategoryMealsScreen = ({route, navigation}: any) => {
  const catId = route.params.categoryid

  const availableMeals = useSelector((state: any) => state.meals.filterdMeals)

  const displayedMeals = availableMeals.filter(
    (meal : any) => {
      return meal.categoryIds.indexOf(catId) >= 0
    }
  );

  return (
    <View style={styles.screen}>
      <MealList listData={displayedMeals} navigation={navigation}/>
    </View>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
