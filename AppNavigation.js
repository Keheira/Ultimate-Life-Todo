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
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Personal',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
        />
      )
    })
  },
  Work: {
    screen: WorkScreen,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Work',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-briefcase' : 'work'}
        />
      )
    })
  },
  Business: {
    screen: BusinessScreen,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Business',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-business' : 'business'}
        />
      )
    })
  }},
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(TabNav)