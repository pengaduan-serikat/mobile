import axios from 'axios';
import { LIST_EVENT_ERROR, LIST_EVENT_LOADING, LIST_EVENT_SUCCESS } from '../store/actionType';
import { API_URL } from '../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';
import cekToken from './cekToken';

export default ( navigation, page ) => async (dispatch) => {
  dispatch({ type: LIST_EVENT_LOADING });
  try {
    await cekToken(navigation)
    const token = await AsyncStorage.getItem('accessToken')
    const { data } = await axios.get(`${API_URL}events?page=${page}`, { headers : { Authorization : `Bearer ${token}`}})
    dispatch({ type: LIST_EVENT_SUCCESS, payload : data });
  } catch(err){
    dispatch({ type: LIST_EVENT_ERROR, payload : err.response.data });
  }
}