1.	Style: 
background-color => backgroundColor etc
flex

navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }


//Overriding shared style:

static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };


//Overriding with a shared component:

  class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./spiro.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle />,
  };


//Shared component:

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: <LogoTitle />,
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
      headerRight: (
        <Button onPress={params.increaseCount} title="+1" color="#fff" />
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  /* later in the render function we display the count */
}

//Modal:
	{
    mode: 'modal',
    headerMode: 'none',
  }


// React Navigation doesn't guarantee that your screen component will begin mounting before the header for the screen is rendered, and because the increaseCount param is set in componentWillMount, we may not have it available to us in navigationOptions, which is why we include the || {} when grabbing the params (there may not be any). We know this is an awkward API and we do plan on improving it!

// As an alternative to setParams, you could use a state management library (such as Redux or MobX) and communicate between the header and the screen in the same way you would with two distinct components.

2. Navigation:
this.props.navigation.navigate('Details', {
  itemId: 86,
  otherParam: 'anything you want here',
});

this.props.navigation.state.params

static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    
    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
    }
  };

   /* Inside of render() */
  <Button
    title="Update the title"
    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
  />

//   The argument that is passed in to the navigationOptions function is an object with the following properties:

// navigation - The navigation prop for the screen, with the screen's route at navigation.state.
// screenProps - The props passing from above the navigator component
// navigationOptions - The default or previous options that would be used if new values are not provided

