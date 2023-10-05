import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, Button } from "react-native";
import screen1 from "./screens/screen1";
import screen2 from "./screens/screen2";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Add Student">
        <Stack.Screen name="Add Student" component={screen1} />
        <Stack.Screen
          name="s2"
          component={screen2}
          options={{ headerTitle: "View Student" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
