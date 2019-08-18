import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import convertTgl from '../utils/convertTgl';
import { scale } from '../utils/scaling';
import { vw } from '../utils/viewPort';

const CardCase = props => {
  return (
    <View style={{marginBottom:scale(10)}}>
      <View style={{borderWidth:1, borderColor:'#C4C4C4', borderRadius:scale(5)}}>
        <View style={{paddingVertical:scale(5), paddingHorizontal:scale(10),}}>  
          <Text style={styles.titleStyle}>Title</Text>
          <Text style={styles.textStyle}>{props.caseDetail.title}</Text>
          <Text style={styles.titleStyle}>Deskripsi</Text>
          <Text style={styles.textStyle}>{props.caseDetail.description}</Text>
          <View style={{ flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Text style={styles.titleStyle}>Tanggal</Text>
              <Text style={styles.textStyle}>{convertTgl(props.caseDetail.created_at)}</Text>
            </View>
            {/* <View style={{flex:1}}>
              <Text style={styles.titleStyle}>Status</Text>
              <Text style={styles.textStyle}>{props.caseDetail.case_status}</Text>
            </View> */}
          </View>
        </View>
        <TouchableOpacity onPress={()=>props.navigation.navigate('DetailPengaduan', { id : props.caseDetail.id, user : props.user })} style={{backgroundColor:'#5FC856', borderBottomLeftRadius:scale(4), borderBottomRightRadius:scale(4), borderColor:'#5FC856', paddingVertical:scale(10), justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:4*vw, color:'white'}}>Detail</Text>
        </TouchableOpacity>
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