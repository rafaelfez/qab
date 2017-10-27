import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Inicial extends Component {
	render() {
		return (
			<View style={{ flex: 1, padding: 10, backgroundColor: '#9c27b0'}}>
				<View style={{ flex: 2, marginTop: 30, alignItems: 'center' }}>
                    <Image style={{ height: 200, width: 200 }} source={require('../../img/ic_launcher/web_hi_res_512.png')} />
                </View>
                <View style={{ flex: 2, margin:20  }}>
                	<Button 
						title="Login"
                        color='#A12AB0'
                        onPress={() => Actions.login()}
					/>
					<View style={{ marginTop: 50 }}>
						<Text style={{ textAlign: 'center', marginBottom: 10 }} >Ainda não tem cadastro? Cadastre-se</Text>
						<Button 
							title="Cadastro"
							color='#A12AB0'
							onPress={() => Actions.cadastro()}
						/>
					</View>
                </View>
			</View>
		)
	}
}