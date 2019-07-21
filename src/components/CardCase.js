import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import convertTgl from '../utils/convertTgl';
import { scale } from '../utils/scaling';
import { vw } from '../utils/viewPort';

const CardCase = props => {
  return (
    <View style={{marginBottom:scale(10)}}>
      {/* <Text>{JSON.stringify(props.caseDetail)}</Text> */}
      <View style={{borderWidth:1, paddingVertical:scale(5), paddingHorizontal:scale(10), borderColor:'#C4C4C4', borderRadius:scale(5)}}>
        <Text style={styles.titleStyle}>Title</Text>
        <Text style={styles.textStyle}>{props.caseDetail.title}</Text>
        <Text style={styles.titleStyle}>Deskripsi</Text>
        <Text style={styles.textStyle}>{props.caseDetail.description}</Text>
        <View style={{ flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Text style={styles.titleStyle}>Tanggal</Text>
            <Text style={styles.textStyle}>{convertTgl(props.caseDetail.created_at)}</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.titleStyle}>Status</Text>
            <Text style={styles.textStyle}>{props.caseDetail.case_status}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle : {
    color:'#8D8D8D',
    fontWeight: 'bold',
    fontSize: 3*vw
  },
  textStyle :{
    color:'#6F6E6E',
    paddingLeft:scale(10),
    paddingBottom:scale(10)
  }
})
export default CardCase