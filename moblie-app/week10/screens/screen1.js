import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";
import firebase from "../storage/firebaseDB";
import { useNavigation } from "@react-navigation/native";

const Screen1 = ({ route }) => {
  const subjCollection = firebase.firestore().collection("student");
  const navigation = useNavigation();

  const [studentId, setStudentId] = useState(route.params?.studentId || "");
  const [name, setName] = useState(route.params?.name || "");
  const [gpa, setGpa] = useState(route.params?.gpa || "");
  const [documentId, setDocumentId] = useState(route.params?.key || "");

  const storeOrUpdateSubject = () => {
    subjCollection
      .add({
        studentId,
        name,
        gpa,
      })
      .then((res) => {
        setDocumentId(res.id);
        Alert.alert("Student added successfully");
      })
      .catch((error) => {
        console.error("Error adding student: ", error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Student ID"
        onChangeText={(value) => setStudentId(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="GPA"
        onChangeText={(value) => setGpa(value)}
      />

      <Button title={"Add Student"} onPress={() => storeOrUpdateSubject()} />

      <Button
        title="View Student"
        onPress={() => {
          navigation.navigate("s2");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    width: "80%",
  },
});

export default Screen1;
