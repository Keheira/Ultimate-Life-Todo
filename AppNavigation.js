import React from 'react';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createAppContainer } from 'react-navigation'
import Colors from './constants/Colors'
import TabBarIcon from './components/TabBarIcon';
import PersonalScreen from './screens/Personal';
import WorkScreen from './screens/Work';
import BusinessScreen from './screens/Business';


const TabNav = createMaterialBottomTabNavigator({
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
          name={Platform.OS === 'ios' ? 'ios-briefcase' : 'md-briefcase'}
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
          name={Platform.OS === 'ios' ? 'ios-business' : 'md-business'}
        />
      )
    })
  }},
  {
    initialRouteName: 'Home',
    activeColor: Colors.tabIconSelected,
    inactiveColor: Colors.tabIconDefault,
    barStyle: { backgroundColor: '#FFA500'}
  }
)

export default createAppContainer(TabNav)