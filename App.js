import React, { Component } from 'react';
import { StyleSheet, Image, Button, View, Text } from 'react-native';
// import { StackNavigator } from 'react-navigation';

import LoginScreen from './app/LoginScreen';//Login
import RegisterScreen from './app/RegisterScreen';//Register
import LoginHelpScreen from './app/LoginHelpScreen';//Login-Help

import HomeScreen from './app/HomeScreen';//Login
import DetailsScreen from './app/DetailsScreen';//Register

import ModalScreen from './app/ModalScreen';
// import SettingsScreen from './app/SettingsScreen';

// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { TabNavigator, TabBarBottom } from 'react-navigation';
import PrivacyScreen from './app/PrivacyScreen';
import HelpScreen from './app/HelpScreen';

import { TabNavigator, StackNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation';


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



class DetailsScreen2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class HomeScreen2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        { /* other code from before here */ }
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        { /* other code from before here */ }
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const HomeStack = StackNavigator({
  Home: { screen: HomeScreen2 },
  Details: { screen: DetailsScreen2 },
});

const SettingsStack = StackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen2 },
});

const TabStack = TabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
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

const DrawerStack = DrawerNavigator({
  Root: {
    screen: RootStack,
  },
  Tab: {
    screen: TabStack,
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