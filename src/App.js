import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Card, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB_FuGdfA3R695myIZmhxbtDh7PLwWgfT4',
            authDomain: 'auth-5d6a2.firebaseapp.com',
            databaseURL: 'https://auth-5d6a2.firebaseio.com',
            projectId: 'auth-5d6a2',
            storageBucket: 'auth-5d6a2.appspot.com',
            messagingSenderId: '718153650607',
            appId: '1:718153650607:web:3f1afcdb16c80c79'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (<Card>
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                </Card>);
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        };

    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
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
