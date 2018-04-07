import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Button = () => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={()=> Actions.welcome()} style={buttonStyle}>
            <Text style={textStyle}>
            Log In
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10
    },
    buttonStyle: {
      backgroundColor: '#f6c501',
      borderRadius: 3,
      borderWidth: 3,
      borderColor: '#fff',
      marginTop: 10
    }
};

export default Button;