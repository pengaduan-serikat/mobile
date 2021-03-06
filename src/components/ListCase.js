import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import CardCase from './CardCase';
import NextIcon from '../assets/next.png'
import BackIcon from '../assets/back.png'
import { scale } from '../utils/scaling';
import { vw } from '../utils/viewPort';

const ListCase = props => {
  return (
    <View>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <View style={{flex:2}}>
          {
            props.list.current_page > 1 && (
              <TouchableOpacity onPress={()=>props.getCases(-1)} style={{flexDirection:'row', padding:scale(15)}}>
                <View style={{height:scale(20), width:scale(20), marginRight:scale(10)}}>
                  <Image source={BackIcon} style={{height:'100%', width:'100%'}} resizeMode={'stretch'}></Image>
                </View>
                <Text style={{color:'#8D8D8D', fontSize:3.3*vw}}>Kembali</Text>
              </TouchableOpacity>
            )
          }
        </View>
        <View style={{flex:1, alignItems:'center', paddingVertical:scale(15)}}>
          <Text>{props.list.current_page} / {props.list.last_page}</Text>
        </View>
        <View style={{flex:2}}>
          {
            props.list.current_page < props.list.last_page && (
              <TouchableOpacity onPress={()=>props.getCases(1)} style={{flexDirection:'row', padding:scale(15)}}>
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
        props.list.data && (
          props.list.data.map((value, index)=>{
            return (
              <CardCase caseDetail = { value } key = { index } user={props.user} navigation={props.navigation}></CardCase>
            )
          })
        )
      }
    </View>
  )
}

export default ListCase