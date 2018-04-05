import React, { Component } from 'react';
import { View, Image } from 'react-native';
import AddIcon from '../AddIcon';
import ListIcon from '../ListIcon';
import EditIcon from '../EditIcon';
import UserIcon from '../UserIcon';

class IconLayout extends Component {
    render (){
    return (
        <View style={styles.layoutStyle} >
            <ListIcon />
            <EditIcon />
            <AddIcon />
            <UserIcon /> 
        </View>
    );
};
};
const styles = {
   
    layoutStyle: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent:"space-evenly",
        marginTop: 15
    }
};

export default IconLayout;