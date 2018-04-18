import React , { Component} from 'react'; 
import { View, Text, Image, Font, AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Input, CardSection } from './common';
import TextComponent from './FontsComponent';

const ACCESS_TOKEN = 'access_token'; 

class LoginForm extends Component {
	state = {email: '' , password: '', name: '', error: '', position: '', loading: false };
	
	componentWillMount(){

		  this.image=require('../assets/img/katenna-logo.png')
	}
	storeToken(responseData) {
        AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err) => {
            if (err) {
                console.log("an error");
                throw err;
            }
            console.log("success");
        }).catch((err) => {
            console.log("error is: " + err);
        });
    }

    async onLoginPressed() {
        this.setState({ showProgress: true })
        try {
            let response = await fetch('https://katennamain.herokuapp.com/auth/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    
                        email: this.state.email,
                        password: this.state.password                 
                })
            });
            let res = await response.text();
            if (response.status >= 200 && response.status < 300) {
                //Handle success
                let accessToken = res;
                console.log("This is a successfull response:" + accessToken);
                //On success we will store the access_token in the AsyncStorage
                this.storeToken(accessToken);
                let accessTokenObject = JSON.parse(accessToken);
                console.log(JSON.parse(accessToken))
                let userFullName= accessTokenObject.user.name;
                let userPosition = accessTokenObject.user.position;
                Actions.welcome({ 
                    userFullName: userFullName,
                    userJobPosition: userPosition
                });

                
            } else {
                //Handle error
                let error = res;
                throw error;
                this.onLoginFail();
            }
        } catch (error) {
            this.onLoginFail();
            console.log("error " + error);
            this.setState({ showProgress: false });
        }
    }

	onLoginFail() {
		this.setState({
			error: 'Authentication Failed.',
			loading: false
		});
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size='small' />
		}
		return (
			<Button onPress={this.onLoginPressed.bind(this)}>
			</Button>
		);
	}

    render() {
        return (
            <View style={styles.viewStyle}>
            <Image
                style={styles.imgStyle}
                source={this.image}
                />
			<View style={styles.bothInputsStyle}>
            	<CardSection>
					<Input
						
						placeholder="user@email.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
			</View>
			<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

			{this.renderButton()}

        </View>
        );
    };
};

const styles = {
    viewStyle:{
		flex: 1,
		justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: "#f6c501"
 
    },
    imgStyle: {
        height: 45,
		width: 200,
		marginBottom: 90
	},
	bothInputsStyle: {
		width: 250,
		marginBottom: 10
	}

};


export default LoginForm;
