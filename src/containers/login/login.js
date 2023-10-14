/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View,StyleSheet,} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {getAuthData, setUserData} from '../../services/redux/auth/auth-slice';
import Service from '../../services/service';
import Loginimage from './component/loginComponent';
import Account from './component/accountComponent';
import Username from './component/usernameComponent';
import Passwords from './component/passwordComponent';
import Loginbutton from './component/buttonComponent';
import CheckBox from './component/checkboxComponent';
import Forgotpass from './component/forgotpassComponent';

function Login() {
  //const fontStyles = ['normal', 'italic'];
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth = useSelector(getAuthData);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [userObject, setUserObject] = useState({
    Username: '',
    password: '',
    rememberMe: false,
  });

  const [trialData, setTrialData] = useState('');

  const handleButtonPress = () => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (res.data && res.data.length > 0) {
          setData(res.data);
        } else {
          setData([]);
        }
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    testApi();
  }, []);

  const buttonPress = () => {
    dispatch(setUserData([trialData]));
  };

  const testApi = () => {
    Service.get('/users').then(response => {
      dispatch(setUserData(response.data));
    });
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#262626',
        flex: 1,
        flexDirection: 'column',
      }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#262626',
            flex: 1,
            flexDirection: 'column',
            padding: 32,
            paddingTop: height * 0.2,
          }}>
          <Loginimage />
          <Account />
          <Username />
          <Passwords />
          <CheckBox />
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Loginbutton
              data="LOGIN"
              where="Home"
              onPress={handleButtonPress}
            />

            <Loginbutton
              data="SIGN UP"
              where="SignUp"
              onPress={handleButtonPress}
            />
          </View>
        </View>
        <Forgotpass />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  Checkbox1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 1,
    marginTop: 14,
  },
  buttonText: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
});
export default Login;
