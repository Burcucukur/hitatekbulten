import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';


import {Text, TouchableOpacity, View} from 'react-native';

const loginbutton = data => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        borderColor: `#000000`,
        backgroundColor: `#38e54d`,
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        margin: 10,
        flex: 1,
      }}
      onPress={() => {
        console.log(data);
        navigation.navigate(data.where);

      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 15,
        }}>
        {data.data}
      </Text>
    </TouchableOpacity>

  );
};
export default loginbutton;
