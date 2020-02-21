import React, { Component } from 'react'
import { 
  View,
  Text,
  Image
} from 'react-native';

class NavbarButton extends Component {
  render() {
    return (
    <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white', borderWidth: 1, borderColor: '#eee' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{ uri: 'https://source.unsplash.com/daily' }} style={{ width: 26, height: 26 }} />
        <Text style={{ fontSize: 10, color: 'black', marginTop: 4 }}>Hola</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{ uri: 'https://source.unsplash.com/daily' }} style={{ width: 26, height: 26 }} />
        <Text style={{ fontSize: 10, color: 'black', marginTop: 4 }}>Hola</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{ uri: 'https://source.unsplash.com/daily' }} style={{ width: 26, height: 26 }} />
        <Text style={{ fontSize: 10, color: 'black', marginTop: 4 }}>Hola</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{ uri: 'https://source.unsplash.com/daily' }} style={{ width: 26, height: 26 }} />
        <Text style={{ fontSize: 10, color: 'black', marginTop: 4 }}>Hola</Text>
      </View>
    </View>
    )
  }
}

export default NavbarButton;