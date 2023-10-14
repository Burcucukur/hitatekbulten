import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';

import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {img} from "../../../assest/hitateklogo.png"

const Loginimage = () => {
  const navigation = useNavigation();
  let handlePress;
  return (
    <Image
      style={{
        height: height * 0.2,
        width: height * 0.2,
        alignSelf: 'center',
      }}
      source={img}
    />
  );
};
export default Loginimage;