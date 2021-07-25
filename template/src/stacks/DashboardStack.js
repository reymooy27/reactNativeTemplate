import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';

const DashboardStack = () => {

  const {Navigator, Screen} = createStackNavigator();

  return (
    <Navigator>
      <Screen name="Dashboard" component={DashboardScreen}/>
    </Navigator>
  );
};

export default DashboardStack;
