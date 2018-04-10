import React from 'react'; 
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from './common';

const WelcomeScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text>Hi, {'Fulanita'}!</Text>
            <Image 
                style={styles.imgStyle}
                source={require('../assets/img/kat.png')}
                />
            <TouchableOpacity onPress={()=> Actions.bot()}>  
                <Text 
                    style={styles.btnStyle}>
                Wanna Chat?
                </Text> 
            </TouchableOpacity>  

        </View>
    );
};

const styles = {
   viewStyle:{
       flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'

   },
    imgStyle: {
        height: 200,
        width: 200, 
        margin: 50

    },
    btnStyle: {
        color: "#f6c501", 
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#f6c501'
    }
    
};

export default WelcomeScreen;

