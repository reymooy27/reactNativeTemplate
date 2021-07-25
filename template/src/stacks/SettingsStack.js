import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';

const SettingsStack = () => {

  const {Navigator, Screen} = createStackNavigator();

  return (
    <Navigator>
      <Screen name="Settings" component={SettingsScreen}/>
    </Navigator>
  );
};

export default SettingsStack;
