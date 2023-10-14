import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';

import {Text} from 'react-native';

const Account = () => {
  const navigation = useNavigation();
  return (
    <Text
      style={{
        fontSize: 18,
        marginTop: 32,
        fontWeight: 'bold',
        color: '#727272',
        textAlign: 'center',
        fontSize: 22,
      }}>
      ACCOUNT
    </Text>
  );
};
export default Account;