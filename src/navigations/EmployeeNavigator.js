import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native'

import Home from '../containers/home';
import Profile from '../containers/profile';
import IconHomeFocus from '../assets/images.png'
import IconHome from '../assets/25694.png'
import { scale } from '../utils/scaling';
import { vw } from '../utils/viewPort';
import IconProfile from '../assets/363633-200.png'
import IconProfileFocus from '../assets/download.png'
import HomeStack from './HomeStack';
import Event from '../containers/Event'
import IconNewsFocus from "../assets/newspaper-blue.png"
import IconNews from "../assets/newspaper-black.png"


const AppStackNavigator = createBottomTabNavigator({
  // Home,
  // Profile,
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor, focused }) =>
        focused ? (
          <Image
            source={IconHomeFocus}
            style={{ height: scale(20), width: scale(20) }}
          />
        ) : (
            <Image
              source={IconHome}
              style={{ height: scale(20), width: scale(20) }}
            />
          )
    }
  },
  Event: {
    screen: Event,
    navigationOptions: {
      tabBarLabel: "Events",
      tabBarIcon: ({ tintColor, focused }) =>
        focused ? (
          <Image
            source={IconNewsFocus}
            style={{ height: scale(19), width: scale(19) }}
          />
        ) : (
            <Image
              source={IconNews}
              style={{ height: scale(19), width: scale(19) }}
            />
          )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor, focused }) =>
        focused ? (
          <Image
            source={IconProfileFocus}
            style={{ height: scale(19), width: scale(19) }}
          />
        ) : (
            <Image
              source={IconProfile}
              style={{ height: scale(21), width: scale(21) }}
            />
          )
    }
  },   

},
{
  tabBarOptions: {
    style: {
      height: scale(55)
    },
    activeTintColor: "#006DBF",
    labelStyle: {
      paddingBottom: scale(3),
      fontSize: 3 * vw,
    }
  }
}
);

const HomeContainer = createAppContainer(AppStackNavigator);
export default HomeContainer;
