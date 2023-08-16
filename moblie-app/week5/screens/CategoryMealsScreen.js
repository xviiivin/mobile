import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItemr from "../components/Mealltem";
const CategoryMealsScreen = ({route, navigation}) => {
  const renderMealItem = (itemData) => {
    return (
      // console.log(itemData)
      <MealItemr
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          {
            navigation.navigate("s3", {
              titledish: itemData.item.title,
              step:itemData.item.steps
            });
          }
        }}
      />
    );
  };
  // const catId = ...รับข้อมูล id ของประเภทอาหาร...
  const catId = route.params.categoryid
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
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

export default CategoryMealsScreen;
