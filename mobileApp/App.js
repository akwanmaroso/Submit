import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import Login from './src/pages/Login'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import NavbarButton from './src/NavbarBtn';

class App extends Component {
  render() {
    const tab = createMaterialBottomTabNavigator
    return(
      // <Login />
      <View style={{flex: 1}}>
        {/* <Text>Helo From Home</Text> */}
        <View style={{flex: 1}}>

        </View>
        <View style={{backgroundColor: 'blue'}}>
          <NavbarButton />
        </View>
      </View>
    )
  }
}

export default App;
