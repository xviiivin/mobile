import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, Button } from "react-native";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Add Student">
        <Stack.Screen name="Add Student" component={Screen1} />
        <Stack.Screen
          name="s2"
          component={Screen2}
          options={{ headerTitle: "View Student" }}
        />
        <Stack.Screen
          name="s3"
          component={Screen3}
          options={{ headerTitle: "Edit student" }}
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
