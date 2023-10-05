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

  const inputValueUpdate = (val, prop) => {
    switch (prop) {
      case "studentId":
        setStudentId(val);
        break;
      case "name":
        setName(val);
        break;
      case "gpa":
        setGpa(val);
        break;
      default:
        break;
    }
  };

  const storeSubject = () => {
    subjCollection
      .add({
        studentId,
        name,
        gpa,
      })
      .then((res) => {
        setStudentId("");
        setName("");
        setGpa("");
        Alert.alert("Student added successfully");
      });
  };
  const updateSubject = () => {
    const updateSubjDoc = firebase
      .firestore()
      .collection("student")
      .doc(this.state.key);
    updateSubjDoc
      .set({
        studentId: this.state.studentId,
        name: this.state.name,
        gpa: this.state.gpa,
      })
      .then(() => {
        Alert.alert("Update");
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Student ID"
        value={studentId}
        onChangeText={(val) => inputValueUpdate(val, "studentId")}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(val) => inputValueUpdate(val, "name")}
      />
      <TextInput
        style={styles.input}
        placeholder="GPA"
        value={gpa}
        onChangeText={(val) => inputValueUpdate(val, "gpa")}
      />

      <Button title="Add Student" onPress={() => storeSubject()} />
      <Button
        title="Update Student"
        onPress={() => {
          this.updateSubject();
        }}
      />
      <Button
        title="Delete Student"
        onPress={() => {
          this.deleteSubject();
        }}
      />
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
