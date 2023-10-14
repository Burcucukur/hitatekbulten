import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Passwords = () => {
  const navigation = useNavigation();
  const [trialData, setTrialData] = useState('');
  return (
    <View
      style={{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 16,
      }}>
      <TextInput
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: 'black',
          backgroundColor: '#3d3c39',
          textAlign: 'center',
          elevation: 10,
          marginTop: 16,
          paddingRight: 225,
          paddingLeft: 40,
          color: '#686765', // Yazı rengi
          flexDirection: 'row', // Yatay düzenleme
          alignItems: 'center', // Yatayda merkez hizalama
        }}
        placeholder="Password"
        onChangeText={text => setTrialData({...trialData, password: text})}
        placeholderTextColor="#686765">
        <Icon
          name="lock"
          size={20}
          color="#38e54d"
          style={{marginRight: 10, paddingRight: 10}}
        />
        <Text
          style={{
            color: '#686765',
          }}></Text>
      </TextInput>
    </View>
  );
};
export default Passwords;
