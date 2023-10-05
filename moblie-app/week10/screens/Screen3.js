import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button, Alert
} from "react-native";
import firebase from "../storage/firebaseDB";
import { useNavigation } from "@react-navigation/native";

const screen3 = ({ route }) => {
  const subjCollection = firebase.firestore().collection("student");
  const navigation = useNavigation();
  console.log(route.params.subject)
  const [studentId, setStudentId] = useState(route.params?.subject.studentId || "");
  const [name, setName] = useState(route.params?.subject.name || "");
  const [gpa, setGpa] = useState(route.params?.subject.gpa || "");
  const [documentId, setDocumentId] = useState(route.params?.subject.key || "");
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

  const updateSubject = () => {
    const updateSubjDoc = firebase.firestore().collection("student").doc(documentId);
    updateSubjDoc
      .set({
        studentId: studentId,
        name: name,
        gpa: gpa,
      })
      .then(() => {
        Alert.alert("Update successful");
      })
      .catch((error) => {
        console.error("Error updating subject: ", error);
      });
  };
  const deleteSubject = () => {
    const delSubjDoc = firebase
      .firestore()
      .collection("student")
      .doc(documentId);
    delSubjDoc.delete().then((res) => {
      Alert.alert("delete");
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={studentId}
        onChangeText={(val) => inputValueUpdate(val, "studentId")}
      />
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(val) => inputValueUpdate(val, "name")}
      />
      <TextInput
        style={styles.input}
        value={gpa}
        onChangeText={(val) => inputValueUpdate(val, "gpa")}
      />

      <Button
        title="Update Subject"
        onPress={() => {
          updateSubject();
        }}
      />

      <Button
        title="Delete Subject"
        onPress={() => {
          deleteSubject();
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

export default screen3;
