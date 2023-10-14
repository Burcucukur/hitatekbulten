import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';

const checkBox_1 = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);

  const [userObject, setUserObject] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 1,
        marginTop: 14,
      }}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
          setUserObject({
            ...userObject,
            rememberMe: !userObject.rememberMe,
          });
        }}
        color={'green'}
        uncheckColor={'red'}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection:
        'row', marginBottom: 1, marginTop: 14,}}>
            
        
      </Checkbox>
      <Text
        style={{
          fontSize: 15,
          color: '#727272',
          textAlign: 'center',
        }}>
        Remember Account Information
      </Text>
    </View>
  );
};
export default checkBox_1;