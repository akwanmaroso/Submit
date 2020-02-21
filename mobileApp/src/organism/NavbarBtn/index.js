import React, { Component } from 'react'
import { 
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import IconNavbar from '../../molecules/IconNavbar';

class NavbarButton extends Component {
  render() {
    return (
    <View style={{ height: 56, flexDirection: 'row', backgroundColor: '#FFFFFF', width: '100%'}}>
      <IconNavbar img={require('../../assets/home.png')} title="Home"/>
      <IconNavbar img={require('../../assets/account.png')} title="Account"/>
    </View>
    )
  }
}

export default NavbarButton;