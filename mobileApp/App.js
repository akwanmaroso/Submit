import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  Image
} from 'react-native';
import Login from './src/pages/Login'
import NavbarButton from './src/NavbarBtn';
import Axios from 'axios';

class App extends Component {
  state = {
    user: {}
  }

  async componentDidMount () {
    const user = await Axios.get('http://10.0.2.2:4900/api/5e45fd1272c2321d88ef4c6d/showdata');
    this.setState({
      user: user.data.data
    })
    console.log(this.state.user); 
  }
  render() {
    return(
      // <Login />
      <View style={{flex: 1}}>
        <Text>Helo From Home</Text>
        <View style={{flex: 1}}>
          <Text>{this.state.user.email}</Text>
          <Text>{this.state.user.username}</Text>
        </View>
        <View style={{backgroundColor: 'blue'}}>
          <NavbarButton />
        </View>
      </View>
    )
  }
}

export default App;
