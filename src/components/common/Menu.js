import React from 'react';
import { Text, View, Image } from 'react-native';
import IconLayout from './IconLayout';

const Menu = () => {
    const { imgStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
           <IconLayout />
        </View>
    );
};
const styles = {
    viewStyle: {
        backgroundColor: '#757789',
        height: 75,
        position: 'relative'
    },
    imgStyle: {
        height: 45,
        width: 45
        
    }
};

export default Menu;