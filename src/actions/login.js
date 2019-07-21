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
    let fullName = data.first_name + " " +data.last_name
    await AsyncStorage.setItem('accessToken', data.token)
    await AsyncStorage.setItem('NIK', data.NIK)
    await AsyncStorage.setItem('email', data.email)
    await AsyncStorage.setItem('fullName', fullName)
    await AsyncStorage.setItem('division', data.division_id.toString())
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    navigation.navigate('Employee');
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: error.response.data,
    });
  }
};
