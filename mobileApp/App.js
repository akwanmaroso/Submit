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
        isLogin: false,
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
        <NavigationContainer style={{width:'100%', margin: 0, padding:0}}
          data={this.state.data}
        >
        <Tab.Navigator
            initialRouteName="Saku"
            tabBarOptions={{
              activeTintColor: '#e91e63',
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Notifications"
              component={Home}
              options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Account"
              component={Home}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
    )
  }
}
export default App;
