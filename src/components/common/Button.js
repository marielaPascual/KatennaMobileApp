import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Button = ({ onPress}) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
            LOG IN
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 20,
      letterSpacing: 2,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 50,
      paddingRight: 50
    },
    buttonStyle: {
      backgroundColor: '#f6c501',
      borderWidth: 2,
      borderColor: '#fff',
      marginTop: 20
    }
};

export { Button };