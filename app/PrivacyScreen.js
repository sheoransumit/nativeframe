import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class PrivacyScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Notifications',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./notif-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  componentDidMount(){
    this.props.navigation.navigate('DrawerToggle');
  }
  
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}