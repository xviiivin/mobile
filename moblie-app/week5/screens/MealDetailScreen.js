import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
// import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้

  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.tex}>The Meal Detail Screen!</Text>
        <Text style={styles.tex1}> 👉 Dish</Text>
        <Text style={{ marginTop: 15 }}>{route.params.titledish}</Text>
        <Text style={styles.tex1}> 👉 Cooking step</Text>
        <Text style={{ marginTop: 15 }}> {route.params.step}</Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <Button
          title="Go Back to Categories"
          onPress={() => {
            navigation.navigate("s1");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "start",
    padding: 20,
    marginTop: 50,
  },
  mb: {
    marginButtom: 50,
  },
  tex: {
    fontSize: 24,
  },
  tex1: {
    fontSize: 18,
    marginTop: 25,
  },
});

export default MealDetailScreen;
