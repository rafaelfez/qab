import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image } from 'react-native';

export default class Cadastro extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 10, backgroundColor: '#9c27b0' }} >
                <View style={{ flex: 1, margin: 10 }} >
                    <TextInput 
                        style={{ fontSize: 20, height: 45, marginBottom: 10 }}
                        placeholder="Nome e Sobrenome"
                    />

                    <TextInput 
                        style={{ fontSize: 20, height: 45, marginBottom: 10 }}
                        placeholder="Data de Nascimento"
                    />
                    <TextInput 
                        style={{ fontSize: 20, height: 45, marginBottom: 10 }}
                        placeholder="E-mail"
                    />
                    <TextInput 
                        style={{ fontSize: 20, height: 45, marginBottom: 10 }}
                        placeholder="Senha"
                    />
                    <TextInput 
                        style={{ fontSize: 20, height: 45, marginBottom: 10 }}
                        placeholder="Confirmar Senha"
                    />
                    <Button 
                        title="Cadastrar"
                        color='#9c27b0'
                        onPress={() => false}
                    />
                </View>
            </View>
        )
    }
}