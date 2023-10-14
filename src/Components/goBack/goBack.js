import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
const {height} = Dimensions.get('window');
import {Dimensions} from 'react-native';
import {siyah} from "../../assets/siyah.png"

const GoBack = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <TouchableOpacity
        style={{
          color: '000000',
          position: 'absolute',
          marginTop: height * -0.12,
          left: height * -0.22,
          borderRadius: 40,
          padding: 5,
          margin: 5,
          paddingLeft: height * 0.2,
          paddingRight: 15,
          marginBottom: height * 0.03,
        }}
        onPress={navigation.goBack}>
        <Image
          source={siyah}
          handlePress={() => {
            navigation.goBack();
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GoBack;