import React from 'react';
import { View, Image } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import WelcomeScreen from './WelcomeScreen';
import ChatBotScreen from './ChatBotScreen';
import LoginForm from './LoginForm';
import SuggestionsForm from './SuggestionsForm';

const AppLogo = () => {
    return (
      <View style={{ alignItems: 'center', marginTop: 3 }}>
        <Image source={require('../assets/img/kIcon.png')}
               style={{ width: 30, height: 30 }} />
      </View>
    );
  };

const Routers = () => (
    <Router navigationBarStyle={styles.navBar}
            titleStyle={styles.navBarTitle}

            navBarButtonColor='#fff' >
            

            <Scene key="tabbar" tabs={false}> 

                <Scene  
                key="login" 
                component={LoginForm}
                title="Log Out"
                hideNavBar={true}
				// initial
                />

                <Scene  
                key="welcome" 
                component={WelcomeScreen}
                renderTitle={() => { return <AppLogo />; }}                
                />
    
                <Scene 
                key="bot" 
                component={ChatBotScreen}
                title="Bot"
                renderTitle={() => { return <AppLogo />; }}                                
                />
               
               <Scene 
                key="suggestions" 
                component={SuggestionsForm}
                title="Suggestions"
                renderTitle={() => { return <AppLogo />; }}                                
                />

            </Scene>
        
          
      </Router>
);  

const styles = {
    navBar: {
        backgroundColor: '#f6c501',
        height: 60, 
        shadowOpacity: 0, 
        shadowOffset: { 
            height: 0, 
            width:0, 
        }, 
        shadowRadius: 0, 
        borderBottomWidth:0
    },
    navBarTitle: {
        color: '#fff',
        fontSize: 20
    }  
};


export default Routers;
