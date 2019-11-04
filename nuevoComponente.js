import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class NuevoComponente extends Component{
    render(){
        return (
            <Text style={styles.texto}>
                new Component
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    texto: {
        color: 'blue'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
});