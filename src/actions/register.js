import axios from 'axios';
import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS
} from '../store/actionType';
import { API_URL } from '../utils/constant';

export default payload => async (dispatch) => {
  dispatch({
    type: REGISTER_LOADING
  });
  try {
    const body = {
      NIK: payload.NIK,
      email: payload.email,
      password : payload.password
    };

    const { data } = await axios.post(`${API_URL}employees/register`, body);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    if( error.response ){
      dispatch({
        type: REGISTER_ERROR,
        payload: error.response.data.message,
      });
    } else{
      dispatch({
        type: REGISTER_ERROR,
        payload: error.message,
      });
    }
  }
};
