import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Expo from 'expo';

class TextComponent extends Component {
    state = {
        isReady: false
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
        });
        this.setState({ isReady: true })
    }
    condtionalRender() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return (
            <Text style={{ fontFamily: 'open-sans-bold', fontSize: 56 }}>
                Hello, world!
         </Text>
        );
    }
    render() {
        return (
            <View>
            {this.condtionalRender()}
            </View>
        );
    }
}

export default TextComponent;