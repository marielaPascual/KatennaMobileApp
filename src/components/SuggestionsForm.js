import React, { Component } from 'react';
import { WebView, View } from 'react-native';

class SuggestionsForm extends Component {
  render() {
    return (
      <WebView
        style={{marginTop:-10}}
        source={{uri: 'https://docs.google.com/forms/d/e/1FAIpQLSfXQmunKiZdMLTGs2IktTLAW2B0l_jecXu_e6V2iidr6PEZ0w/viewform?usp=pp_url&entry.751402580'}}
      />
    );
  }
}

export default SuggestionsForm;