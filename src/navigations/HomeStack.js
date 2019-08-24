import React, { Component } from 'react';
import Home from '../containers/home';
import DetailPengaduan from '../containers/detailPengaduan';
import { vw } from '../utils/viewPort';
import { scale } from '../utils/scaling';
import {
  createStackNavigator,
} from "react-navigation";
import ChangePass from '../containers/ChangePass';
const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      headerTransparent: true
    }
  },
  DetailPengaduan: {
    screen: DetailPengaduan,
    navigationOptions: {
      headerTitle: "Detail Pengaduan",
      headerStyle: {
        backgroundColor: "#006DBF",
        height: scale(50)
      },
      headerTintColor:'white',
      headerTitleStyle: {
        // fontFamily: "Montserrat-Regular",
        fontSize: 5 * vw
      }
    }
  },
  ChangePass: {
    screen: ChangePass,
    navigationOptions: {
      headerTitle: "Ubah Password",
      headerStyle: {
        backgroundColor: "#006DBF",
        height: scale(50)
      },
      headerTintColor:'white',
      headerTitleStyle: {
        // fontFamily: "Montserrat-Regular",
        fontSize: 5 * vw
      }
    }
  },
})

export default HomeStack