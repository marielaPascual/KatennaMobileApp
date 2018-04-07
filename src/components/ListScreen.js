import React from 'react'; 
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const ListScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text onPress={()=> Actions.welcome()}>This is the List Component</Text>
           <Image 
            
            style={styles.imgStyle}
            source={require('../assets/img/kat2.png')}
            />
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
        width: 200
    }
};

export default ListScreen;
