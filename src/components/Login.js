import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image, StatusBar } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 10, backgroundColor: '#9c27b0' }} >
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
                <View>
                    <Text>{/*Erro aparece aqui */}</Text>
                </View>
            </View>
        )
    }
}