import axios from 'axios';
import { FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_LOADING, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_RESET } from '../store/actionType';
import { API_URL } from '../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';
import cekToken from './cekToken';

export default ( navigation, email ) => async (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_LOADING });
  try {
    await cekToken(navigation)
    const token = await AsyncStorage.getItem('accessToken')
    const { data } = await axios.post(`${API_URL}forgot-password`, {email}, { headers : { Authorization : `Bearer ${token}`}})
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload : data.message });
  } catch(err){
    dispatch({ type: FORGOT_PASSWORD_ERROR, payload : err.response.data.message });
  }
}