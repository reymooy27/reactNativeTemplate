import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlanScreen from '../screens/PlanScreen';

const PlanStack = () => {

  const {Navigator, Screen} = createStackNavigator();

  return (
    <Navigator>
      <Screen name="Plan" component={PlanScreen}/>
    </Navigator>
  );
};

export default PlanStack;
