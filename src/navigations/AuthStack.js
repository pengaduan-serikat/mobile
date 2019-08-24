import React, { Component } from 'react';
import { vw } from '../utils/viewPort';
import { scale } from '../utils/scaling';
import {
  createStackNavigator,
} from "react-navigation";
import auth from '../containers/auth';
import ForgotPass from '../containers/ForgotPass';

const AuthStack = createStackNavigator({
  Auth: {
    screen: auth,
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      headerTransparent: true
    }
  },
  ForgotPass: {
    screen: ForgotPass,
    navigationOptions: {
      headerTitle: "Forgot Password",
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

export default AuthStack