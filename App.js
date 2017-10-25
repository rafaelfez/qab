import React, { Component } from 'react';
import firebase from 'firebase';
import Routes from './src/Routes';

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyB0ucSQdCSKrNQ9UeDFfmLOjw1DYQNwhrw",
      authDomain: "qab-db.firebaseapp.com",
      databaseURL: "https://qab-db.firebaseio.com",
      projectId: "qab-db",
      storageBucket: "qab-db.appspot.com",
      messagingSenderId: "553426959712"
    })
  }

  render() {
    return (
      <Routes />
    );
  }
}
