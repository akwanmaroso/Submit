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
import Login from './src/pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/pages/Home';
class App extends Component {
  constructor(props) {
    super(props);
      this.state ={
        isLogin: true,
      }
      this.handleStateLogin = this.handleStateLogin
  }

  handleStateLogin = (text, data) => {
    this.setState({
      isLogin: text,
      data: data
    });
  }

  render() {
    // console.log(this.state.data);
    const Tab = createBottomTabNavigator();
    { console.log(this.state.isLogin) }
    if (!this.state.isLogin) {
      return (
        <Login 
        isLogin={this.state.isLogin}
        handleStateLogin={this.handleStateLogin}
        />
      )
    }
    return(
        // <Login />  
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Saku"
            tabBarOptions={{
              activeTintColor: 'black',
              inactiveBackgroundColor: '#07AC69',
              activeBackgroundColor: '#07AC69',
              inactiveTintColor: 'white',
              }}
            >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size}/>
                ),
              }}
            />
            <Tab.Screen
              name="Notifications"
              component={Home}
              options={{
                tabBarLabel: 'Riwayat',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="calendar" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Account"
              component={Home}
              options={{
                tabBarLabel: 'Akun',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
    )
  }
}
export default App;
