import React from 'react';
import {
  View,
  Image,
  Text, 
  TouchableOpacity
} from 'react-native';
// import {  } from 'react-native-gesture-handler';
const IconNavbar = (props) =>{
  return (
    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={props.img} style={{ width: 30, height: 30, backgroundColor: '#FFFFFF' }} />
      <Text style={{ fontSize: 10, color: props.active ? '#3be322' : '#1C1C1C' , marginTop: 4, fontFamily: 'Roboto' }}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default IconNavbar;