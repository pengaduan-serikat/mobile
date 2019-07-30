import { CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_LOADING, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_RESET } from '../store/actionType';

const initialState = {
  loading: false,
  err: false,
  errMsg: '',
  success : false,
  successMsg : null
};

const changePassword = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_LOADING:
      return { ...state, loading: true };
    case CHANGE_PASSWORD_ERROR:
      return { 
        ...state, 
        loading: false, 
        errMsg: action.payload, 
        err : true, 
        success: false,
        successMsg : null
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        err: false,
        errMsg: '',
        success : true,
        successMsg : action.payload
      };
    case CHANGE_PASSWORD_RESET:
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

export default changePassword;