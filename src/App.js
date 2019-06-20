import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
                apiKey: 'AIzaSyB_FuGdfA3R695myIZmhxbtDh7PLwWgfT4',
                authDomain: 'auth-5d6a2.firebaseapp.com',
                databaseURL: 'https://auth-5d6a2.firebaseio.com',
                projectId: 'auth-5d6a2',
                storageBucket: 'auth-5d6a2.appspot.com',
                messagingSenderId: '718153650607',
                appId: '1:718153650607:web:3f1afcdb16c80c79'
        })
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

const styles = {

    basicStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textStyle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 60,
    }
}


export default App;
