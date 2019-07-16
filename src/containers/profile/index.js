import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { scale } from '../../utils/scaling';
import AsyncStorage from '@react-native-community/async-storage';

const Logout = async (props) => {
  console.log('====================================');
  console.log("masuk logout");
  console.log('====================================');
  try{
    await AsyncStorage.clear()
    props.navigation.navigate('Auth')
  } catch(err) {

  }
}

const index = (props) => (
  <View>
    <Text>
      Test profile lalalala
    </Text>
    <TouchableOpacity onPress={()=>Logout(props)} style={{backgroundColor:'red', height:scale(50), width:scale(75)}}>
      <Text>Logout</Text>
    </TouchableOpacity>
  </View>
);

export default index;
