import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MetricsScreen from '../screens/MetricsScreen';

const MetricsStack = () => {

  const {Navigator, Screen} = createStackNavigator();

  return (
    <Navigator>
      <Screen name="Metrics" component={MetricsScreen}/>
    </Navigator>
  );
};

export default MetricsStack;
