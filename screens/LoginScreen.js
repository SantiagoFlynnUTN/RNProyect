import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import * as Google from 'expo-google-app-auth';


class LoginScreen extends Component {
    signInWithGoogleAsync = async() => {

        try {
            const { type, accessToken, user } = await Google.logInAsync({
                //expoClientId:'665619669110-hvg81mr9slk3iqt99d4q2j1rop3ig3u2.apps.googleusercontent.com',
                iosClientId: '665619669110-n19aep06hm4r667a0bv8376vp033hois.apps.googleusercontent.com',
                androidClientId: '665619669110-5pn6icup5vpovj0e77ie1quud0lf7j7t.apps.googleusercontent.com',
                scopes: ['profile', 'email'],

      /*       shift alt a    iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
                androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`, */
              });
        
              if (type === 'success') {
                /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
                console.log(user);
              }
          } catch (e) {
            console.log("la concha de tu vieja");

            return { error: true };
          }


        /*
        try {
          const result = await Google.logInAsync({
            //androidClientId: YOUR_CLIENT_ID_HERE,
            behavior:'web',
            iosClientId: '665619669110-n19aep06hm4r667a0bv8376vp033hois.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }*/
      }

    render() {
        return (
            <View style={styles.container}>
                <Button title='sing in with google'
                onPress={() => this.signInWithGoogleAsync()}></Button>
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});