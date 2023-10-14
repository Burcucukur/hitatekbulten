import React, { useEffect } from 'react';
import { SafeAreaView, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'; 
import Splashlogo from './component/hitateklogo';

const { height } = Dimensions.get('window');

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#262626' }}>
      <ScrollView>
        <View style={{ flex: 1, padding: 32, paddingTop: height * 0.2 }}>
          <Splashlogo />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Splash;