import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsAction";

const initialState = {
  meals: MEALS,
  filterdMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex((meal) => {
        return meal.id === action.mealId;
      });
      console.log("founded : " + existingIndex);

      if (existingIndex >= 0) {
        const updateFavorites = [...state.favoriteMeals];
        updateFavorites.splice(existingIndex, 1);

        return { ...state, favoriteMeals: updateFavorites };
      } else {
        const mealIdAdd = state.meals.find((meal) => {
          return meal.id === action.mealId;
        });

        if (mealIdAdd) {
          const updateFavoritesMeals = [...state.favoriteMeals, mealIdAdd];
          return { ...state, favoriteMeals: updateFavoritesMeals };
        }
      }
      return state;
    default:
      return state;
  }
};

export default mealsReducer;
