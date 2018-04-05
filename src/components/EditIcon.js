import React from 'react';
import { Image, View } from 'react-native';

const EditIcon = () => {
    return (
        <View>
           <Image
           style={styles.imgStyle}
           source={require('../img/icons/edit.png')}
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

export default EditIcon;