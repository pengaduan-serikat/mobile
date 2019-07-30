import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
// import CardCase from './CardCase';
import LoadingIcon from '../../assets/transparent-background-loading.gif'
import { scale } from '../../utils/scaling';
import cekToken from '../../actions/cekToken';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount=()=>{
    cekToken(this.props.navigation)
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
        <Image source={LoadingIcon} style={{height:'20%', width:'35%'}} ></Image>
      </View>
    );
  }
}

export default Loading;