import { combineReducers, createStore } from "redux";
import mealsReducer from "./reducers/mealsReducer";

const rootState = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootState);
export default store;

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch