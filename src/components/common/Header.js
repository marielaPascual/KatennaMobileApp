import React from 'react';
import { View, Image } from 'react-native';

const Header = () => {
    const { logoStyle, viewStyle, logOutStyle } = styles;
    return (
        <View style={viewStyle}>
            <Image
          style={logoStyle}
          source={require('../../img/katenna-logo.png')}
        />
        <Image
          style={logOutStyle}
          source={require('../../img/icons/exit.png')}
        />
      </View>
    );
};
const styles = {
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: '#F2F7FF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 15,
        elevation: 2,
        position: 'relative',
        justifyContent: 'space-between'
    },
    logoStyle: {
        marginLeft: 20,
        height: 30,
        width: 145
    },
    logOutStyle: {
        marginRight: 15,
        marginTop: 5,
        height: 25,
        width: 25
    }
};

export default Header;