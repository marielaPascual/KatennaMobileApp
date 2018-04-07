import React , { Component} from 'react'; 
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from './common/Button'

class LoginForm extends Component {
    

    render() {
        return (
            <View style={styles.viewStyle}>
            <Image 
                style={styles.imgStyle}
                source={require('../assets/img/katenna-logo.png')}
                />
            
            <Button onPress={()=> Actions.welcome()}></Button>
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
    }

};


export default LoginForm;
