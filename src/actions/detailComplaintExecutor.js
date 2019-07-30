import axios from 'axios';
import { DETAIL_COMPLAINT_ERROR, DETAIL_COMPLAINT_LOADING, DETAIL_COMPLAINT_SUCCESS, DETAIL_COMPLAINT_RESET } from '../store/actionType';
import { API_URL } from '../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';
import cekToken from './cekToken';

export default ( navigation, id ) => async (dispatch) => {
  dispatch({ type: DETAIL_COMPLAINT_LOADING });
  try {
    await cekToken(navigation)
    const token = await AsyncStorage.getItem('accessToken')
    const { data } = await axios.get(`${API_URL}executors/cases/${id}`, { headers : { Authorization : `Bearer ${token}`}})
    dispatch({ type: DETAIL_COMPLAINT_SUCCESS, payload : data });
  } catch(err){
    dispatch({ type: DETAIL_COMPLAINT_ERROR, payload : err.response.data.message });
  }
}