/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import GoBack from '../../Components/goBack/goBack';
import Userinformation from './component/userinformation/userinformation'
import Userimage from './component/userimage/userimage'
let handlePress;

const Profile = () => {
  const navigation = useNavigation();
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
          <GoBack />
          <ScrollView>
            <Userimage />
            <Userinformation/>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
