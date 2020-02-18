import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#eee', justifyContent: 'center'}}>
        <View style={{marginHorizontal: 16}}>
          <View>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#1C1C1C',}}>Email</Text>
            <TextInput style={{height: 40, width: '100%', borderColor: 'black', borderWidth: 1}}/>
          </View>
          <View>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#1C1C1C',}}>Password</Text>
            <TextInput style={{height: 40, width: '100%', borderColor: 'black', borderWidth: 1}}/>
          </View>
          <View style={{alignSelf: 'flex-end', marginTop: 14}}>
            <TouchableOpacity style={{ backgroundColor: '#eb3434', padding: 16}}>
                <Text style={{fontSize: 15, color: 'white'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}