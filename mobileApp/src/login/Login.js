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

export default class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#00E676', justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>SAKU-KU</Text>  
        </View>
        <View style={{marginHorizontal: 16}}>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{alignSelf: 'center', marginTop: 20}}>
            <TouchableOpacity style={{ backgroundColor: '#eb3434', padding: 16, borderRadius: 25,  }}>
                <Text style={{fontSize: 16, color: 'white', textAlign: 'center', paddingHorizontal: 46}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 17, 
    fontWeight: 'bold', 
    color: '#1C1C1C'
  },
  input: {
    height: 54, 
    width: '100%', 
    paddingLeft: 10, 
    backgroundColor: 'white', 
    marginTop:4, 
    borderRadius: 10, 
    fontSize: 15,
  }
})