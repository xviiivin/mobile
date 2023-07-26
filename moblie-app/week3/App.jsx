import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,ScrollView  } from "react-native";
import Home from "./screens/Home";
export default function App() {
  return (
    <ScrollView  style={styles.container}>
      <Home />
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
