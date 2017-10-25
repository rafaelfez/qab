import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 10 }} >
                <View style={{ flex: 2, marginTop: 30, alignItems: 'center' }}>
                    <Image style={{ height: 200, width: 200 }} source={require('../../img/ic_launcher/web_hi_res_512.png')} />
                </View>
                <View>
                    {/*Erro aparece aqui */}
                    <Text></Text>
                </View>
                <View style={{ flex: 1, margin: 10 }}>
                    <TextInput
                        style={{ fontSize: 20, height: 45, marginBottom: 10 }}
                        placeholder="E-mail"
                    />
                    <TextInput
                        style={{ fontSize: 20, height: 45, marginBottom: 20 }}
                        placeholder="Senha"
                    />
                    <Button 
                        title="Entrar"
                        color='#9c27b0'
                        onPress={() => false}
                    />
                </View>
            </View>
        )
    }
}