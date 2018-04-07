import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import WelcomeScreen from './WelcomeScreen';
import ChatBotScreen from './ChatBotScreen';
import LoginForm from './LoginForm';

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
                title="Welcome"
                
                />
    
                <Scene 
                key="bot" 
                component={ChatBotScreen}
                title="Bot"
                />
               
            </Scene>
        
          
      </Router>
);  

const styles = {
    navBar: {
        backgroundColor: '#f6c501',
        height: 60
    },
    navBarTitle: {
        color: '#fff',
        fontSize: 20
        }
    
};


export default Routers;
