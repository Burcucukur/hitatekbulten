import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, TextInput, View} from 'react-native';

const Username = () => {
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
        placeholder="UserNames"
        placeholderTextColor="#686765"
        onChangeText={text => setTrialData(text)}>
        <Icon
          name="user"
          size={20}
          color="#38e54d"
          style={{marginRight: 10, paddingRight: 10}}
        />
        <Text
          style={{
            color: '#686765',
            flex: 1, // Metnin genişliği kadar genişleme
          }}>
          UserName
        </Text>
      </TextInput>
    </View>
  );
};
export default Username;
