import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MetricsStack from '../stacks/MetricsStack';
import TeamStack from '../stacks/TeamStack';
import DashboardStack from '../stacks/DashboardStack';
import PlanStack from '../stacks/PlanStack';
import SettingsStack from '../stacks/SettingsStack';

const BottomTab = () => {

  const {Navigator, Screen} = createBottomTabNavigator();

  return (
    <Navigator initialRouteName="Dashboard" screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Metrics') {
          iconName = 'compass';
        } else if (route.name === 'Team') {
          iconName = 'briefcase-outline';
        }
          else if (route.name === 'Dashboard') {
          iconName = 'heart';
        } else if (route.name === 'Plan') {
          iconName = 'chatbox-ellipses-outline';
        } else if (route.name === 'Settings') {
          iconName = 'person';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={24} color={color} />;
      },
    })}
      tabBarOptions={{
        activeTintColor: '#fff',
        style:{backgroundColor: 'black', borderTopWidth: 0, elevation: 0},
      }}>
      <Screen name="Metrics" component={MetricsStack}/>
      <Screen name="Team" component={TeamStack}/>
      <Screen name="Dashboard" component={DashboardStack}/>
      <Screen name="Plan" component={PlanStack}/>
      <Screen name="Settings" component={SettingsStack}/>
    </Navigator>
  );
};

export default BottomTab;
