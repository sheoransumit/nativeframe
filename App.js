import React, { Component } from 'react';
import { StyleSheet, Image, Button, View, Text } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import { TabNavigator, StackNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './app/LoginScreen';//Login
import RegisterScreen from './app/RegisterScreen';//Register
import LoginHelpScreen from './app/LoginHelpScreen';//Login-Help

// import SettingsScreen from './app/SettingsScreen';

const AuthStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
    LoginHelp: {
      screen: LoginHelpScreen,
    },
  },
  {
    initialRouteName: 'Login',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'transparent',
      }
    },
  }
);

import HomeScreen from './app/HomeScreen';
import DetailsScreen from './app/DetailsScreen';
const MainStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

import ModalScreen from './app/ModalScreen';
const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);


import HomeIScreen from './app/HomeIScreen';
import HomeIDetailsIScreen from './app/HomeIDetailsIScreen';
const HomeIStack = StackNavigator({
  Home: { screen: HomeIScreen },
  Details: { screen: HomeIDetailsIScreen },
});

const SettingsIStack = StackNavigator({
  Settings: { screen: SettingsIScreen },
  Details: { screen: SettingsIDetailsIScreen },
});

const TabIStack = TabNavigator(
  {
    Home: { screen: HomeIStack },
    Settings: { screen: SettingsIStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: false,
  }
);
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});


import PrivacyScreen from './app/PrivacyScreen';
import HelpScreen from './app/HelpScreen';
const DrawerStack = DrawerNavigator({
  Root: {
    screen: RootStack,
  },
  Tab: {
    screen: TabIStack,
  },
  Privacy: {
    screen: PrivacyScreen,
  },
  Help: {
    screen: HelpScreen,
  },
});

export default StackNavigator(
  {
    Auth: {
      screen: AuthStack,
    },
    Drawer: {
      screen: DrawerStack,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);