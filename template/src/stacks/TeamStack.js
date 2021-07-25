import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TeamScreen from '../screens/TeamScreen';

const TeamStack = () => {

  const {Navigator, Screen} = createStackNavigator();

  return (
    <Navigator>
      <Screen name="Team" component={TeamScreen}/>
    </Navigator>
  );
};

export default TeamStack;
