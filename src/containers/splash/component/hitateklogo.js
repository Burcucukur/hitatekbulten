import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';

import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {hitateklogo} from '../../../assest/hitateklogo.png'
const Splashlogo = () => {
  const navigation = useNavigation();
  return (
    <Image
      style={{
        marginTop: 0,
        height: height * 0.07,
        width: height * 0.07,
        alignSelf: 'center',
      }}
      source={hitateklogo}
    />
  );
};
export default Splashlogo;
