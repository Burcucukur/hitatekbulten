import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {horizontalScale, moderateScale, verticalScale} from '../../../Metrics';
import {Text, Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import {griGeri} from '../../../assets/griGeri.png'
import {grirecent} from '../../../assets/grirecent.png'
import {homeIconLime} from '../../../assets/homeIconLime.png'
import loopgri from '../../../assets/loopgri.png'
import userGri from '../../../assets/userGri.png'
let handlePress;

const Tabbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tabbar}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image
          onPress
          style={{
            borderRadius: 50,
            padding: 10,
            margin: 10,
            paddingHorizontal: 5,
            paddingVertical: 5,
            elevation: 4,
            paddingLeft: 15,
            paddingRight: 15,
            marginBottom: verticalScale(-10),
            height: verticalScale(15),
            width: horizontalScale(15),
            marginTop: verticalScale(-10),
            fontSize: moderateScale(20),
          }}
          source={griGeri}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
        <Image
          onPress
          style={{
            color: '#000000',
            borderRadius: 50,
            padding: 10,
            margin: 10,
            paddingHorizontal: 5,
            paddingVertical: 5,
            elevation: 4,
            paddingLeft: 15,
            paddingRight: 15,
            marginBottom: verticalScale(-10),
            height: verticalScale(30),
            width: horizontalScale(30),
            marginTop: verticalScale(-10),
            fontSize: moderateScale(20),
          }}
          source={grirecent}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
        <Image
          onPress
          style={{
            borderRadius: 50,
            padding: 10,
            margin: 10,
            paddingHorizontal: 5,
            paddingVertical: 5,
            elevation: 4,
            paddingLeft: 15,
            paddingRight: 15,
            marginBottom: verticalScale(-10),
            height: verticalScale(60),
            width: horizontalScale(60),
            marginTop: verticalScale(-10),
            fontSize: moderateScale(20),
          }}
          source={homeIconLime}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
        <Image
          onPress
          style={{
            color: '#000000',
            borderRadius: 50,
            padding: 10,
            margin: 10,
            paddingHorizontal: 5,
            paddingVertical: 5,
            elevation: 4,
            paddingLeft: 15,
            paddingRight: 15,
            marginBottom: verticalScale(-10),
            height: verticalScale(30),
            width: horizontalScale(30),
            marginTop: verticalScale(-10),
            fontSize: moderateScale(40),
          }}
          source={loopgri}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
        <Image
          style={{
            color: '#000000',
            borderRadius: 50,
            padding: 10,
            margin: 10,
            paddingHorizontal: 5,
            paddingVertical: 5,
            elevation: 4,
            paddingLeft: 15,
            paddingRight: 15,
            marginBottom: verticalScale(-10),
            height: verticalScale(30),
            width: horizontalScale(30),
            marginTop: verticalScale(-10),
            fontSize: moderateScale(40),
          }}
          onPress
          s={() => {
            navigation.navigate('');
          }}
          source={userGri}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  tabbar: {
    alignItems: 'center',
    color: 'red',
    backgroundColor: '#2D2D2D',
    borderRadius: 18,
    height: verticalScale(40),
    width: horizontalScale(320),
    marginTop: verticalScale(-120),
    marginBottom: verticalScale(78),
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 40,
  },
});

export default Tabbar;
