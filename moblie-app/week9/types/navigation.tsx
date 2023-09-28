import { RouteProp } from "@react-navigation/native";

export type StackParamList = {
  ButtomNavigation: undefined;
  DrawerNavigation: undefined;
  Categories: undefined;
  CategoryMeals: {
    categoryTitle: string;
  }
  MealDetail: {
    dish: string;
  }
};

export type DrawerNavigation = RouteProp<StackParamList, "DrawerNavigation">;
export type Category = RouteProp<StackParamList, "Categories">;
export type CategoryMeals = RouteProp<StackParamList, "CategoryMeals">;
export type MealDetail = RouteProp<StackParamList, "MealDetail">;

