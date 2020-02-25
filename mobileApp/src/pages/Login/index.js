import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import Axios from 'axios';
// import {Button} from 'reas';

export default class Login extends Component {
  constructor(props) {
    super(props);
    state = {
      username: '',
      password: '',
    }
  }
  
  handleLogin = async() => {
    try {
      const login = await Axios.post('https://backend-sakuku.herokuapp.com/api/login', {
        username: this.state.username,
        password: this.state.password
      });
      const user = login.data.data;
      this.props.handleStateLogin(true, user);
      alert('Berhasil Login');
    } catch (err) {
      console.log(err.message);
      alert('Gagal Login');
    }
  }
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#07AC69', paddingTop: 65}}>
        <View style={{ flex: 1, marginBottom: 81}}>
          <View style={{ alignItems: 'center'}}>
            <Text style={{ fontSize: 31, color:'#ffffff' }}>Sign In</Text>
          </View>
          <View style={{ marginHorizontal: 7, marginTop: 39 }}>
            <View>
              <TextInput 
                style={styles.input} 
                placeholder="Username"
                onChangeText={(username) => this.setState({username})} 
                />
            </View>
            <View style={{ marginTop: 15 }}>
              <TextInput 
                style={styles.input} 
                onChangeText={(password) => this.setState({password})} 
                placeholder="Password"
                />
            </View>
            <View style={{ alignSelf: 'center', marginTop: 45 }}>
              <TouchableOpacity 
              style={{ backgroundColor: '#ffffff', padding: 16, borderRadius: 25}} 
              onPress={() => this.handleLogin()}
              underlayCorlor={'gray'}
              >
                <Text style={{ fontSize: 16, color: '#07AC69', textAlign: 'center', paddingHorizontal: 46 }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{position: 'relative'}}>
          <View style={{  height: 233, backgroundColor: '#ffffff', justifyContent: 'flex-end', paddingBottom: 80,  alignItems: 'center'}}>
            <Text>Don't have account ?</Text>
            <Text style={{ color: '#07AC69'}}>Sign Up</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff'
  },
  input: {
    height: 54,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#32BB83',
    marginTop: 4,
    borderRadius: 10,
    fontSize: 15,
    color: '#ffffff'
  }
})