import { FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_LOADING, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_RESET } from '../store/actionType';

const initialState = {
  loading: false,
  err: false,
  errMsg: '',
  success : false,
  successMsg : null
};

const forgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_LOADING:
      return { ...state, loading: true };
    case FORGOT_PASSWORD_ERROR:
      return { 
        ...state, 
        loading: false, 
        errMsg: action.payload, 
        err : true, 
        success: false,
        successMsg : null
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        err: false,
        errMsg: '',
        success : true,
        successMsg : action.payload
      };
    case FORGOT_PASSWORD_RESET:
      return {
        loading: false,
        err: false,
        errMsg: '',
        success : false,
        successMsg : null
      }
    default:
      return { ...state };
  }
};

export default forgotPassword;