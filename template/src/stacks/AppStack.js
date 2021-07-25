import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '../components/BottomTab';

const AppStack = () => {

    const {Navigator, Screen} = createStackNavigator();

  return (
    <Navigator initialRouteName="Login">
      <Screen options={{headerShown: false}} name="Home" component={BottomTab}/>
    </Navigator>
);
};

export default AppStack;
