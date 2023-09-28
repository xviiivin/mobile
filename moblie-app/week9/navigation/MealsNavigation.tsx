import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesScreen, CategoryMealsScreen, MealDetailScreen } from "../screens";
import { toggleFavorite } from "../store/actions/mealsAction";
import { DrawerNavigation } from "./DrawerNavigation";

const Root = createNativeStackNavigator();

export default function MealsNavigation({route}) {
  return (
      <Root.Navigator 
        screenOptions= {{ 
          headerStyle: { 
            backgroundColor: "#4a148c", 
          },
          headerTintColor: "white"
        }}>
        <Root.Screen name="DrawerNavigation" component={DrawerNavigation} 
          options={{
            headerShown: false,
          }}
        />
        <Root.Screen name="Categories" component={CategoriesScreen}
          options={{
            title: "Meal Categories"
          }}
        />
        <Root.Screen name="CategoryMeals" component={CategoryMealsScreen} 
          options={
            ({route} : any) => ({
              title : route.params.categoryTitle
            })
          } 
        />
        <Root.Screen name="MealDetail" component={MealDetailScreen} 
          options={
            ({route} : any) => ({
              title : route.params.meal.title,
              headerRight: () => {
                const mealId = route.params.meal.id
                const dispatch = useDispatch();

                const toggleFavoriteHandler = (mealId: any) => {
                  dispatch(toggleFavorite(mealId));
                };
                
                const isFavorite = useSelector((state: any) => {
                  return state.meals.favoriteMeals.some((meal: any) => {
                    return meal.id === mealId
                  })
                })
                
                
                return (
                  <TouchableOpacity
                    style={{paddingRight: 20}}
                    onPress={() => {
                      toggleFavoriteHandler(mealId)
                    }}
                  >
                    <Ionicons
                      name={isFavorite ? 'ios-star' : 'ios-star-outline'}
                      size={25}
                      color={isFavorite ? 'gold' : 'white'} // เพิ่มสีของ icon ตามสถานะ isFavorite
                    />
                  </TouchableOpacity>
                );
              }
            })
          }
        />
      </Root.Navigator>
  );
}
