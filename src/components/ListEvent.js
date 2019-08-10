import React, { Component } from 'react';
// import { View, Text } from 'react-native'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import NextIcon from '../assets/next.png'
import BackIcon from '../assets/back.png'
import { scale } from '../utils/scaling';
import { vw } from '../utils/viewPort';
import Card from './CardEvent';

const List = ({ list }) => {
  return(
    <View>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingVertical:scale(10)}}>
        <View style={{flex:2}}>
          {
            list.current_page > 1 && (
              <TouchableOpacity onPress={()=>getCases(-1)} style={{flexDirection:'row', padding:scale(15)}}>
                <View style={{height:scale(20), width:scale(20), marginRight:scale(10)}}>
                  <Image source={BackIcon} style={{height:'100%', width:'100%'}} resizeMode={'stretch'}></Image>
                </View>
                <Text style={{color:'#8D8D8D', fontSize:3.3*vw}}>Kembali</Text>
              </TouchableOpacity>
            )
          }
        </View>
        <View style={{flex:1, alignItems:'center', paddingVertical:scale(15)}}>
          <Text>{list.current_page} / {list.last_page}</Text>
        </View>
        <View style={{flex:2}}>
          {
            list.current_page < list.last_page && (
              <TouchableOpacity onPress={()=>getCases(1)} style={{flexDirection:'row', padding:scale(15)}}>
                <Text style={{fontFamily:'Montserrat-Regular', color:'#48C2FF', fontSize:3.3*vw}}>Selanjutnya</Text>
                <View style={{height:scale(20), width:scale(20), marginLeft:scale(10)}}>
                  <Image source={NextIcon} style={{height:'100%', width:'100%'}} resizeMode={'stretch'}></Image>
                </View>
              </TouchableOpacity>
            )
          }
        </View>
      </View>
      {
        list.data && (
          list.data.map((value, index)=>{
            return(
              <Card event={value} key = { index }></Card>
            )

          })
        )
      }
      {/* <Text>{JSON.stringify(list)}</Text> */}
    </View>
  )
}

export default List