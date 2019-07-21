import axios from 'axios';
import { ADD_COMPLAINT_ERROR, ADD_COMPLAINT_LOADING, ADD_COMPLAINT_SUCCESS, ADD_COMPLAINT_RESET } from '../store/actionType';
import { API_URL } from '../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';
import cekToken from './cekToken';
import listCases from './cases'

export default ( navigation, dataPengaduan ) => async (dispatch) => {
  dispatch({ type: ADD_COMPLAINT_LOADING });
  try {
    await cekToken(navigation)
    const token = await AsyncStorage.getItem('accessToken')
    const { data } = await axios.post(`${API_URL}cases`, dataPengaduan, { headers : { Authorization : `Bearer ${token}`}})
    dispatch(listCases(navigation))
    dispatch({ type: ADD_COMPLAINT_SUCCESS });
  } catch(err){
    dispatch({ type: ADD_COMPLAINT_ERROR, payload : err.response.data.message });
  }
}