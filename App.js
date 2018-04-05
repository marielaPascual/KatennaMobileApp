import React from 'react';
import { ScrollView, View } from 'react-native';
import Header from './src/components/common/Header';
import Menu from './src/components/common/Menu';


export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView />
        <Menu />
      </View>
    );
  }
}


