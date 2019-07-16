import axios from 'axios';
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from '../store/actionType';
// import { Alert } from 'react-native';
import { API_URL } from '../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';

export default (payload, navigation) => async (dispatch) => {
  dispatch({
    type: LOGIN_LOADING
  });

  try {
    const body = {
      NIK: payload.NIK,
      password: payload.password,
    };

    const { data } = await axios.post(`${API_URL}employees/login`, body);
    await AsyncStorage.setItem('accessToken', data.token)
    // const token = await AsyncStorage.getItem('accessToken')
    // console.log("data token =====> ",token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    navigation.navigate('Employee');
    // console.log(navigation);
  } catch (error) {
    console.log(error);
    // console.log(error.response.data);
    dispatch({
      type: LOGIN_ERROR,
      payload: error.response.data,
    });
  }
};
