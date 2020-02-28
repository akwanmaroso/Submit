import React, {Component} from 'react';
import {
  View, 
  Text,
  Image,
} from 'react-native';
import Axios from 'axios';
import NumberFormat from 'react-number-format';

const Home = (props) => {
  // state = {
  //   user: {}
  // }

  // async componentDidMount (props) {
    // const user = await Axios.get('https://backend-sakuku.herokuapp.com/api/5e45fd1272c2321d88ef4c6d/showdata');
    // this.setState({
    //   user: user.data.data
    // })
    // console.log(props);
  // }

  // render() {
    // console.log(props);
    console.log(props);
    return (
      <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
        <View style={{ fontFamily: 'Roboto', paddingTop: 20, marginHorizontal: 16}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: 22}}>Selamat Datang</Text>
              <Text style={{ fontSize: 19, color: '#C8C9CB'}}>John Doe</Text>
              <Text style={{ fontSize: 19, color: '#C8C9CB'}}>Rp. 500,000</Text>
            </View>
            <View >
              <Image />
            </View>
          </View>
          <View style={{marginTop: 24, position: 'relative', alignItems: 'center'}}>
            <View style={{height: 50, width: 50, borderRadius: 50, borderWidth: 5, borderColor: 'white', backgroundColor: '#C4C4C4', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 36, left: 1, zIndex: 1}}>
              <Text style={{ color: 'black', fontSize: 37, fontWeight: 'bold'}}>+</Text>
            </View>
            <View style={{height: 50, width: 50, borderRadius: 50, borderWidth: 5, borderColor: 'white', backgroundColor: '#C4C4C4', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 36, right: 1, zIndex: 1}}>
              <Text style={{ color: 'black', fontSize: 37, fontWeight: 'bold'}}>-</Text>
            </View>
            <View style={{ height: 120, width: 340,backgroundColor: '#07AC69', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{ fontSize: 30, color: 'white'}}>Rp. 10,000</Text>
            </View>
            
          </View>
        </View>
      </View>
    )
  }
// }
export default Home;