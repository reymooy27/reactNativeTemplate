import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { colors } from './src/constants';
import AppStack from './src/stacks/AppStack';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
      <StatusBar backgroundColor={colors.background}/>
    </>
  )
}

export default App
