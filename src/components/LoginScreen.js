import React , { Component} from 'react'; 
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';


class LoginForm extends Component {
    

    render() {
        return (
            <View style={styles.viewStyle}>
            <Image 
                style={styles.imgStyle}
                source={require('../assets/img/katenna-logo.png')}
                />
            <Text 
            style={styles.btnStyle}
            onPress={()=> Actions.welcome()}>
            Log In 
            </Text>  
        </View>
        );
    }
}

const styles = {
    viewStyle:{
        flex: 1,
         justifyContent: 'center',
         alignItems: 'center', 
         backgroundColor: "#f6c501"
 
    },
    imgStyle: {
        height: 45,
        width: 200
    },

    btnStyle: {
        color: "#f6c501", 
        paddingTop: 8, 
        paddingBottom: 8,
        paddingLeft: 18,
        paddingRight: 18,
        marginTop: 30,
        backgroundColor: "#fff"

    }

};


export default LoginForm;
