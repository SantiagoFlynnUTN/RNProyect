import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Button, View, Linking, ActivityIndicator } from 'react-native';
import DealsHeader from './DealsHeader';
import ServiceRows from './ServiceRows';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'
import LoadingScreen from './screens/LoadingScreen'
import * as Google from 'expo-google-app-auth';

firebase.initializeApp(firebaseConfig)

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen:DashboardScreen
})

const AppNavigator = createAppContainer
(AppSwitchNavigator)

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {

  render() {
    return (

        <AppNavigator/>
/*
      <ScrollView contentContainerStyle={styles.container, { flexGrow: 1, paddingTop: Platform.OS === 'ios' ? 40 : 30}}>
        <DealsHeader/>
        <ServiceRows/>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button   onPress={() => {
    //Linking.openURL('https://wa.me/5492324460708')    
    Linking.openURL(`tel:${5492324460708}`)
  }} title="Clickeame"> </Button>
      </ScrollView>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
