import React from "react";
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
const MealsNavigator = createNativeStackNavigator();

export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigations
  return (
    <NavigationContainer>
      <MealsNavigator.Navigator
        initialRouteName="idk"
        screenOptions={{
          headerStyle: { backgroundColor: "#4a148c" },
          headerTintColor: "#fff",
        }}
      >
        <MealsNavigator.Screen
          name="s1"
          component={CategoriesScreen}
          options={{
            title: "Meal Categories",
          }}
        />
        <MealsNavigator.Screen
          name="s2"
          component={CategoryMealsScreen}
          options={{
            title: "Menu",
          }}
        />
        <MealsNavigator.Screen
          name="s3"
          component={MealDetailScreen}
          options={({route})=>({
            title: route.params.titledish
          })}
        />
      </MealsNavigator.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
