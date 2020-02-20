import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './src/pages/Login'

class App extends Component {
  render() {
    return(
      <Login />
    )
  }
}

export default App;
