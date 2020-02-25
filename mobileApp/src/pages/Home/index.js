import React, {Component} from 'react';
import {
  View, 
  Text,
} from 'react-native';
import Axios from 'axios';
import NumberFormat from 'react-number-format';

export default class Home extends Component {
  // state = {
  //   user: {}
  // }

  async componentDidMount (props) {
    // const user = await Axios.get('https://backend-sakuku.herokuapp.com/api/5e45fd1272c2321d88ef4c6d/showdata');
    // this.setState({
    //   user: user.data.data
    // })
    console.log(props);
  }

  render() {
    // console.log(props);
    return (
      <View style={{flex: 1}}>
        <View style={{ height: 70, justifyContent: 'center', backgroundColor: '#0CB73D',}}>
          <View style={{ marginHorizontal: 16}}>
            <Text style={{fontSize: 20}}>Saku-Ku</Text>
          </View>
        </View>
        {/* content */}
        <View style={{flex: 1, marginTop: 12, marginHorizontal: 16}}>
          <View style={{ backgroundColor: 'green', height: 150, justifyContent: 'center', alignItems: 'center', borderRadius: 8}}>
            {/* <NumberFormat value={this.state.user.money} displayType={'text'} prefix={'Rp '} thousandSeparator={true} renderText={value => <Text style={{fontSize: 30, color: 'white'}}>{value}</Text>}/> */}
          </View>
        </View>
        {/* navbar */}
      </View>
    )
  }
}