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
import NavbarButton from './src/organism/NavbarBtn';
import Axios from 'axios';
import NumberFormat from 'react-number-format';

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
        <View style={{ height: 70, justifyContent: 'center', backgroundColor: '#0CB73D',}}>
          <View style={{ marginHorizontal: 16}}>
            <Text style={{fontSize: 20}}>Saku-Ku</Text>
          </View>
        </View>
        {/* content */}
        <View style={{flex: 1, marginTop: 12, marginHorizontal: 16}}>
          <View style={{ backgroundColor: 'green', height: 150, justifyContent: 'center', alignItems: 'center', borderRadius: 8}}>
            <NumberFormat value={this.state.user.money} displayType={'text'} prefix={'Rp '} thousandSeparator={true} renderText={value => <Text style={{fontSize: 30, color: 'white'}}>{value}</Text>}/>
          </View>
        </View>
        {/* navbar */}
        <View style={{width:'100%', margin: 0, padding:0}}>
          <NavbarButton />
        </View>
      </View>
    )
  }
}

export default App;
