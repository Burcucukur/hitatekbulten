import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {horizontalScale, moderateScale, verticalScale} from '../../../Metrics';
import {Text, Image, TouchableOpacity, View} from 'react-native';

let handlePress;
const Economy = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        onPress
        style={{
          color: '#000000',
          borderColor: `#000000`,
          backgroundColor: `#000000`,
          borderRadius: 50,
          padding: 10,
          margin: 10,
          paddingHorizontal: 5,
          paddingVertical: 5,
          elevation: 4,
          paddingLeft: 15,
          paddingRight: 15,
          marginBottom: 20,
          height: verticalScale(77 - 8),
          width: horizontalScale(65),
          marginTop: verticalScale(9),
          fontSize: moderateScale(20),
        }}
        // source={require('../../../assets/.png')}
      />
    </TouchableOpacity>
  );
};

export default Economy;
