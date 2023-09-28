import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

type Meal = {
  title: string;
  duration: number;
  complexity: string;
  affordability: string;
  imageUrl: string;
  steps: string[];
};

type Props = {
  navigation: any;
  listData: Meal[];
};

const MealList = ({navigation, listData}: Props) => {
  const renderMealItem = ({item}: {item : Meal}) => {
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}s
        image={item.imageUrl}
        onSelectMeal={() => {
          { navigation.navigate("MealDetail", {meal: item})}
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: "100%" }}
        data= {listData}
        renderItem= {renderMealItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
