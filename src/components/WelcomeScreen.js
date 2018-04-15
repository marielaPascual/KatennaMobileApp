import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from './common';

const WelcomeScreen = (props) => {

    return (
        <View style={{flex:1}}>
            <View style={styles.viewStyle}>
                <Text>Welcome, {props.userFullName}!</Text>
             {/* <Text>Let's talk about your {props.userJobPosition} duties.</Text> */}
                <Image
                    style={styles.imgStyle}
                    source={require('../assets/img/kat.png')}
                />
                <TouchableOpacity onPress={() => Actions.bot()}>
                    <Text
                        style={styles.btnStyle}>
                        CHAT NOW
                </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.suggestionsViewStyle}>
                <Text
                    style={styles.suggestionsTextStyle}>
                    Task Suggestion Box
                </Text>
                <TouchableOpacity onPress={() => Actions.suggestions()}>
                    <Image
                        style={styles.suggestiosImgStyle}
                        source={require('../assets/img/suggestions.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = {
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'

    },
    imgStyle: {
        height: 200,
        width: 200,
        margin: 30

    },
    btnStyle: {
        color: "#f6c501",
        fontSize: 20,
        letterSpacing: 2,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#f6c501',
        marginTop: 20
    },
    suggestionsViewStyle:{
        height: 70, 
        backgroundColor: '#262626', 
        justifyContent: 'space-around', 
        alignItems: 'center',
        flexDirection: 'row'
    },
    suggestionsTextStyle: {
        color: "#fff",
        fontSize: 16,
        letterSpacing: 2, 
        marginLeft: 15
    },
    suggestiosImgStyle:{
        width: 40, 
        height: 40,
        marginRight: 15
    }

};

export default WelcomeScreen;

