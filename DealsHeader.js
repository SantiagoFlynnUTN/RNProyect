import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DealsHeader extends Component{
    render(){
        return (
            <View
        style={{height: 400, padding: 10}}>
                      <Text style={{fontSize:20, color:'#333333'}}>Header de Deals</Text>

          <View style={{backgroundColor: '#FFAAFF', flex: 1, borderRadius:5}} >
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