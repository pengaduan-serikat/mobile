import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import CardCase from './CardCase';

const ListCase = props => {
  return (
    <View>
      {
        props.list.map((value, index)=>{
          return (
            <CardCase caseDetail = { value } key = { index }></CardCase>
          )
        })
      }
    </View>
  )
}

export default ListCase