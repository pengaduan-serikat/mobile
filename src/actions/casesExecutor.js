import axios from 'axios';
import { GET_CASES_ERROR, GET_CASES_LOADING, GET_CASES_SUCCESS } from '../store/actionType';
import { API_URL } from '../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';
import cekToken from './cekToken';

export default ( navigation ) => async (dispatch) => {
  dispatch({ type: GET_CASES_LOADING });
  try {
    await cekToken(navigation)
    const token = await AsyncStorage.getItem('accessToken')
    const { data } = await axios.get(`${API_URL}executors/cases`, { headers : { Authorization : `Bearer ${token}`}})
    console.log('====================================');
    console.log("data cases ==> ", data);
    console.log('====================================');
    dispatch({ type: GET_CASES_SUCCESS, payload : data });
  } catch(err){
    dispatch({ type: GET_CASES_ERROR, payload : err.response.data });
  }
}