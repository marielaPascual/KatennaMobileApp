import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from './common';

const WelcomeScreen = (props) => {
    const B = (props) => <Text style={{color: "#000000"}}>{props.children}</Text>
    return (
        <View style={{flex:1}}>
            <View style={styles.viewStyle}>
                <View>
                    <Text style ={styles.viewText}>Welcome,  <B>{props.userFullName}!</B>{"\n"}</Text>
                    <Text style ={styles.viewText}>Let's talk about your {"\n"}<B>{props.userJobPosition}</B> duties.</Text>
                </View>
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
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    viewText: {
        textAlign: 'center',
        paddingLeft: 30,   
        paddingRight: 30,
        color: "#b6b8bb"
    },
    imgStyle: {
        height: 200,
        width: 200

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
        marginBottom: 15
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

