import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import convertTgl from '../utils/convertTgl';
import { scale } from '../utils/scaling';
import { vw } from '../utils/viewPort';

const Card = ({ event }) => {
  return (
    <View style={{marginBottom:scale(10)}}>
      <View style={{borderWidth:1, borderColor:'#C4C4C4', borderRadius:scale(5)}}>
        <View style={{paddingVertical:scale(10), paddingHorizontal:scale(10), alignItems:'center'}}>  
          <Text style={[styles.textStyle, {fontSize:4.5*vw}]}>{event.title}</Text>
          <Text style={styles.titleStyle}>{convertTgl(event.created_at)}</Text>
          <Image source={{ uri : event.picture }} style={{height:scale(100), width:scale(100), marginVertical:scale(20)}}></Image>
          <Text style={[styles.textStyle, {fontSize:3.5*vw}]}>{event.description}</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  titleStyle : {
    color:'#8D8D8D',
    fontWeight: 'bold',
    fontSize: 3*vw,
    // paddingBottom:scale(1)

  },
  textStyle :{
    color:'#6F6E6E',
    paddingLeft:scale(10),
  }
})
export default Card