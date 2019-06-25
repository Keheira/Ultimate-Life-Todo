import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TabBarIcon from './components/TabBarIcon';
import PersonalScreen from './screens/Personal';
import WorkScreen from './screens/Work';
import BusinessScreen from './screens/Business';

const TabNav = createBottomTabNavigator({
  Home: {
    screen: PersonalScreen,
    tabBarLabel: 'Personal',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      />
    )
  },
  Work: {
    screen: WorkScreen,
    tabBarLabel: 'Work',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      />
    )
  },
  Business: {
    screen: BusinessScreen,
    tabBarLabel: 'Business',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      />
    )
  }},
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(TabNav)