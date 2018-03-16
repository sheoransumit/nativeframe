import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class LoginScreen extends Component {
  // It might be tempting to try to use this.props inside of navigationOptions, but because it is a static property of the component, this does not refer to an instance of the component and therefore no props are available. 
  // The binding of this in navigationOptions is not the HomeScreen instance, so you can't call setState or any instance methods on it.
  // React Navigation doesn't guarantee that your screen component will begin mounting before the header for the screen is rendered, and because the increaseCount param is set in componentWillMount, we may not have it available to us in navigationOptions, which is why we include the || {} when grabbing the params (there may not be any). We know this is an awkward API and we do plan on improving it!
  // As an alternative to setParams, you could use a state management library (such as Redux or MobX) and communicate between the header and the screen in the same way you would with two distinct components.

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button
          title="Login"
          onPress={() => {
            this.props.navigation.navigate('Drawer');
          }}
        />
        <Button
          title="Help?"
          onPress={() => {
            this.props.navigation.navigate('LoginHelp');
          }}
        />
        <Button
          title="Register"
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}
        />
      </View>
    );
  }
}