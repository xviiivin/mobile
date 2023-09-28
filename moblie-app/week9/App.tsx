import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { ButtomTabNavigation } from "./navigation/ButtomTabNavigation";
import store from "./store";

export default function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ButtomTabNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
