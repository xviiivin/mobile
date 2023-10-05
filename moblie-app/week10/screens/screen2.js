import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import firebase from "../storage/firebaseDB";
import { useNavigation } from "@react-navigation/native";

const Screen2 = () => {
  const [subjectList, setSubjectList] = useState([]);
  const subjCollection = firebase.firestore().collection("student");
  const navigation = useNavigation();

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
    navigation.navigate("s3", {
      subject: subject
    });
    console.log(subject);
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <View>
        {subjectList.map((subject) => (
          <TouchableOpacity
            key={subject.key}
            style={styles.input}
            onPress={() => handleSubjectPress(subject)}
          >
            <Text>Student ID: {subject.studentId}</Text>
            <Text>Name: {subject.name}</Text>
            <Text>GPA: {subject.gpa}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 2,
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },
});

export default Screen2;
