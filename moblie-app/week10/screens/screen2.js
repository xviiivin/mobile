import React, { useState, useEffect } from "react";
import firebase from "../storage/firebaseDB";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const screen2 = () => {
  const [subjectList, setSubjectList] = useState([]);
  const navigation = useNavigation();

  const subjCollection = firebase.firestore().collection("student");

  const getCollection = (querySnapshot) => {
    const allData = [];
    querySnapshot.forEach((res) => {
      const { studentId, name, gpa } = res.data();
      allData.push({ key: res.id, studentId, name, gpa });
    });
    setSubjectList(allData);
  };

  useEffect(() => {
    const unsubscribe = subjCollection.onSnapshot(getCollection);
    return () => {
      unsubscribe();
    };
  }, [subjCollection]);

  const handleSubjectPress = (subject) => {
    navigation.navigate("Add Student", subject);
  };
  return (
    <View>
      {subjectList.map((subject) => (
        <TouchableOpacity
          key={subject.key}
          style={styles.input}
          onPress={() => handleSubjectPress(subject)}
        >
          <Text>studentId: {subject.studentId}</Text>
          <Text>Name: {subject.name}</Text>
          <Text>Gpa: {subject.gpa}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 2,
    width: "100%",
  },
});

export default screen2;
