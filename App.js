import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import firebase from 'firebase';
import {Font} from 'expo';
import { setCustomText } from 'react-native-global-props'; //for global styling
import Routers from './src/components/Router';


export default class App extends React.Component {
  state = {
    isReady: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <View style={{ flex: 1 }}>
        <Routers />
      </View>
    );
  }
}

//global styling props go here
const customTextProps = {
  style: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'open-sans'
  }

};

setCustomText(customTextProps);
