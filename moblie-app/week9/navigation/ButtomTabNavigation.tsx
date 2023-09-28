import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { FavoritesScreen } from "../screens";
import MealsNavigation from "./MealsNavigation";

const Tab = createBottomTabNavigator();

export const ButtomTabNavigation = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "orange",
          tabBarStyle: { backgroundColor: "#fff" },
          tabBarLabelStyle: { fontSize: 15 },}} >
        <Tab.Screen name="Meals" component={MealsNavigation}
          options={{
            headerShown: false,
            tabBarIcon: ({color,size}) => {
              return <MaterialIcons name="restaurant" size={size} color={color} />;
            }
          }}
        />
        <Tab.Screen name="Favorites" component={FavoritesScreen}
          options={{
            headerTitle: "Your Favorites",
            headerStyle: { 
              backgroundColor: "#4a148c",
            },
            headerTitleAlign: "left",
            headerTintColor: "white",
            tabBarIcon: ({color,size}) => {
              return <Entypo name="star" size={size} color={color} />;
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}