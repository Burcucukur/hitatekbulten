import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './rootStack';

/**
 * for root navigation with all  stack screen
 * @returns
 */
const RootNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <RootStack />
    </NavigationContainer>
  );
};

export default RootNavigator;
