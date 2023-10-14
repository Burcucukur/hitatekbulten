import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';

import {Text, View, TouchableOpacity} from 'react-native';

const Forgotpass = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 32, alignSelf: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NewPasswordd');
        }}>
        <Text style={{fontSize: 17, color: '#727272'}}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Forgotpass;