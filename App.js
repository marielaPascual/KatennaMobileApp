import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Header from './src/components/common/Header';
import Menu from './src/components/common/Menu';
import { setCustomText } from 'react-native-global-props';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView>
          <Text>Checking font</Text>
        </ScrollView>
        <Menu />
      </View>
    );
  }
}


const customTextProps = {
  style: {
    fontSize: 16,
    color: 'black'
  }
};

setCustomText(customTextProps);
