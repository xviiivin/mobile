import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Home from "./screens/Home";
import SecPage from "./screens/SecPage";
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Home /> */}
        <SecPage />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});