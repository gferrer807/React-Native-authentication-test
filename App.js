import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './src/components/Common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
    
    state = { loggedIn: null}

    componentWillMount() {
        
    firebase.initializeApp({
    apiKey: 'AIzaSyB-wSoottHgA1dS80wqQb5rMJj4fwB4FyM',
    authDomain: 'auth-343a7.firebaseapp.com',
    databaseURL: 'https://auth-343a7.firebaseio.com',
    projectId: 'auth-343a7',
    storageBucket: 'auth-343a7.appspot.com',
    messagingSenderId: '284063261175'
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
        return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
    
    render() {
        return (
            <View>
                <Header headerText="Authentication " />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
