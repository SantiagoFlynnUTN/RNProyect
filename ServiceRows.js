import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ServiceRows extends Component{
    render(){
        return (

        <View style={{height: 400, padding: 10}}>
          <Text style={{fontSize:20, color:'#333333'}}>Flexbox de Servicios</Text>

          <View style={{backgroundColor: '#AAAAFF', flex: 1, borderRadius:5, flexDirection:'row'}} >

          </View>
        </View>
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