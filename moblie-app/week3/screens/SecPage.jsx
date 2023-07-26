import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'

const SecPage = () => {
  const data = [{
    id: 1,
    name: 'it',
    pic: require('../assets/course-bach-it.jpg'),

  }, {
    id: 2,
    name: 'dsba',
    pic: require('../assets/course-bach-dsba.jpg'),
  }, {
    id: 3,
    name: 'bit',
    pic: require('../assets/course-bach-bit.jpg'),
  }, {
    id: 4,
    name: 'ait',
    pic: require('../assets/course-bach-ait.jpg'),
  }
  ];
  // const [images, setimages] = useState([
  //   require('../assets/course-bach-it.jpg'),
  //   require('../assets/course-bach-dsba.jpg'),
  //   require('../assets/course-bach-bit.jpg'),
  //   require('../assets/course-bach-ait.jpg'),
  // ]);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Image source={item.pic
              }
                key={index}
                style={{
                  width: 360,
                  height: 300,
                  borderWidth: 2,
                  borderColor: '#d35647',
                  resizeMode: 'contain',
                  margin: 8
                }}
              />
              <TouchableOpacity>
                <Text style={{
                  display: 'flex',
                  borderWidth: 2,
                  borderColor: 'black',
                  padding: 8,
                  textAlign: 'center'
                }}>{item.name}
                </Text>
              </TouchableOpacity>
            </View>)
        }}
      />

    </View>
  )
}


export default SecPage