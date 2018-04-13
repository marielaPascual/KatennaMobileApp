import React , { Component} from 'react'; 
import { View, Text, Image, Font } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Input, CardSection } from './common';
import TextComponent from './FontsComponent';

class LoginForm extends Component {
	state = {email: '' , password: '', error: '', loading: false };
	
	componentWillMount(){
		firebase.initializeApp({
			apiKey: 'AIzaSyCSer4T5S2w2mx5lcKy-q4-vv4G2lRROmk',
			authDomain: 'authentication-5cc0a.firebaseapp.com',
			databaseURL: 'https://authentication-5cc0a.firebaseio.com',
			projectId: 'authentication-5cc0a',
			storageBucket: 'authentication-5cc0a.appspot.com',
			messagingSenderId: '916095330998'
		  });
		  
		  this.image=require('../assets/img/katenna-logo.png')
	}
	onButtonPress() {
		const { email, password } = this.state;

		// this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email,password)
			.then( () =>
			{ this.onLoginSuccess() }
			)
			.catch(() => {
				this.onLoginFail();
			});
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication Failed.',
			loading: false
		});
	}

	onLoginSuccess() {
		Actions.welcome();
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size='small' />
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
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
