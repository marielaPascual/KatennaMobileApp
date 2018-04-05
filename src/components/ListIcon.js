import React from 'react';
import { Image, View } from 'react-native';

const ListIcon = () => {
    return (
        <View>
           <Image
           style={styles.imgStyle}
           source={require('../img/icons/list.png')}
               />
       </View>
);
};

const styles = {

imgStyle: {
   height: 45,
   width: 45,
   
}
};

export default ListIcon;