import React, { Component } from 'react';
import { Image, Button, View, Text } from 'react-native';
import LogoTitle from '../app/LogoTitle';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button onPress={params.increaseCount} title="+1" color="#fff" />
      ),
    };
  };
  // It might be tempting to try to use this.props inside of navigationOptions, but because it is a static property of the component, this does not refer to an instance of the component and therefore no props are available. 
  // The binding of this in navigationOptions is not the HomeScreen instance, so you can't call setState or any instance methods on it.
  // React Navigation doesn't guarantee that your screen component will begin mounting before the header for the screen is rendered, and because the increaseCount param is set in componentWillMount, we may not have it available to us in navigationOptions, which is why we include the || {} when grabbing the params (there may not be any). We know this is an awkward API and we do plan on improving it!
  // As an alternative to setParams, you could use a state management library (such as Redux or MobX) and communicate between the header and the screen in the same way you would with two distinct components.
  

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
        <Button
          title="Drawer"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Drawer');
          }}
        />
      </View>
    );
  }
}