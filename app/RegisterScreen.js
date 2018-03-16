import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Register Screen</Text>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('Drawer')}
        />
      </View>
    );
  }
}