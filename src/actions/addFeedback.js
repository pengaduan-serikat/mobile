import axios from 'axios';
import { ADD_FEEDBACK_ERROR, ADD_FEEDBACK_LOADING, ADD_FEEDBACK_SUCCESS, ADD_FEEDBACK_RESET } from '../store/actionType';
import { API_URL } from '../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';
import cekToken from './cekToken';
import listCases from './cases'
import listCaseExc from './casesExecutor'
import detailComplaintExecutor from './detailComplaintExecutor';

export default ( navigation, id, description ) => async (dispatch) => {
  dispatch({ type: ADD_FEEDBACK_LOADING });
  try {
    await cekToken(navigation)
    const token = await AsyncStorage.getItem('accessToken')
    const { data } = await axios.post(`${API_URL}executors/cases/${id}/feedback`, description, { headers : { Authorization : `Bearer ${token}`}})
    dispatch(detailComplaintExecutor(navigation, id))
    const accessId = await AsyncStorage.getItem('accessId')
    if( accessId == 2 ){
      dispatch(listCases(navigation))
    } else if( accessId == 3 ){
      dispatch(listCaseExc(navigation))
    }
    dispatch({ type: ADD_FEEDBACK_SUCCESS });
  } catch(err){
    dispatch({ type: ADD_FEEDBACK_ERROR, payload : err.response.data.message });
  }
}