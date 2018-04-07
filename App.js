import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { setCustomText } from 'react-native-global-props'; //for global styling
import Routers from './src/components/Router';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Routers/>
      </View>
    );
  }
}

//global styling props go here
const customTextProps = {
  style: {
    fontSize: 20,
    color: 'black'
  }
};

setCustomText(customTextProps);
