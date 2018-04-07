import React, { Component } from 'react';
import { WebView } from 'react-native';

class ChatBotScreen extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://console.dialogflow.com/api-client/demo/embedded/7d304919-0df1-4533-8f13-e7a0e708cddc'}}
      />
    );
  }
}

export default ChatBotScreen;