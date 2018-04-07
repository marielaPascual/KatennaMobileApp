import React from 'react'; 
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const WelcomeScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text>Hi, {'Fulanita'}!</Text>
                <Image 
                
                style={styles.imgStyle}
                source={require('../assets/img/kat1.png')}
                />
            <Text 
            style={styles.btnStyle}
            onPress={()=> Actions.bot()}>
            Wanna Chat?
            </Text>    
        </View>
    );
};

const styles = {
   viewStyle:{
       flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

   },
    imgStyle: {
        height: 200,
        width: 200, 
        margin: 50

    },
    btnStyle: {
        color: "#fff", 
        padding: 12,
        backgroundColor: "#f6c501"

    }
    
};

export default WelcomeScreen;

