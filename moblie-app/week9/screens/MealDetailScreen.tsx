import React from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";

export const MealDetailScreen = ({navigation, route} : any) => {
  const meal = route.params.meal;
  
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image
          style={{width: '100%', height: 200}}
          source={{ uri: meal.imageUrl }}
        />
        <View style={[styles.mealRow, styles.mealDetail]}>
          <Text>{meal.duration}</Text>
          <Text>{meal.complexity}</Text>
          <Text>{meal.affordability}</Text>
        </View>
        
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Ingredients</Text>

        <View style={{width: '90%', justifyContent: "space-between", paddingVertical: 10}}>
          { meal.ingredients.map((index ,key) => {
            return (
              <Text key={index} style={{paddingVertical: 7}}>{index}</Text>
            )
          })}
        </View>

        <Text style={{fontWeight: 'bold', fontSize: 20}}>Steps</Text>

        <View style={{width: '90%', justifyContent: "space-between", paddingVertical: 10}}>
          { meal.steps.map((index ,key) => {
            return (
              <Text key={index} style={{paddingVertical: 7}}>{index}</Text>
            )
          })}
        </View>
        
        <Button
          title="Go Back to Categories"
          onPress={() => {
            navigation.popToTop();
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealRow: {
    flexDirection: "row",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "5%",
    width: "100%"
  },
});
