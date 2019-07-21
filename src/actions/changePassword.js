import axios from 'axios';
import { CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_LOADING, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_RESET } from '../store/actionType';
import { API_URL } from '../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';
import cekToken from './cekToken';
import listCases from './cases'

export default ( navigation, dataPassword ) => async (dispatch) => {
  dispatch({ type: CHANGE_PASSWORD_LOADING });
  try {
    await cekToken(navigation)
    const token = await AsyncStorage.getItem('accessToken')
    const { data } = await axios.put(`${API_URL}change-password`, dataPassword, { headers : { Authorization : `Bearer ${token}`}})
    // dispatch(listCases(navigation))
    // await AsyncStorage.clear()
    // navigation.navigate('Auth')
    dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload : data.message });
  } catch(err){
    dispatch({ type: CHANGE_PASSWORD_ERROR, payload : err.response.data.message });
  }
}