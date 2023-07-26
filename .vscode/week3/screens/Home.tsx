import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
    const [isText, setIsText] = useState()
    const onPressLearnMore = () => { console.log(isText) }
    const [word, setWord] = useState('');
    const [wordList, setWordList] = useState([]);

    const handleAddWord = () => {
        if (word.trim() !== '') {
            setWordList((prevList) => [
                ...prevList,
                { word: word.trim() },
            ]);
            setWord('');
        }
    };
    const renderItem = ({ item }) => (
        <Text style={{ fontSize: 18 }}>{item.word}</Text>
    );
    return (
        <View>
            <Text style={styles.header}>สมุดบันทึก</Text>
            <TextInput style={styles.input} placeholder="จะใส่อะไรก็ใส่" value={word}
                onChangeText={(text) => setWord(text)} />
            <Text style={styles.mt}> {isText}</Text>
            <Button
                title="กดซะถ้าอยากเก็บข้อมูล"
                color="#841584"
                onPress={handleAddWord}

            />
            <FlatList
                data={wordList}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        fontSize: 30,
    },
    input: {
        height: 60,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    mt: {
        marginTop: 20,
    }
});

export default Home