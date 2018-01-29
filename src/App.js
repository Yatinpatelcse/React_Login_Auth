import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyBPLyR50mTalL5T-Qvh4hHyAeTM0iS2UOE',
        authDomain: 'auth-a6bd3.firebaseapp.com',
        databaseURL: 'https://auth-a6bd3.firebaseio.com',
        // projectId: 'auth-a6bd3',
        storageBucket: 'auth-a6bd3.appspot.com',
        messagingSenderId: '549446187663'
    });
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

export default App;
