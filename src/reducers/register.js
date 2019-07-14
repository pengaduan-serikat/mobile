import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_RESET
} from '../store/actionType';

const initialState = {
  data: {},
  success: false,
  loading: false,
  err: false,
  errMsg: '',
};

const register = (state = initialState, action) => {
  console.log('====================================');
  console.log(action);
  console.log('====================================');
  switch (action.type) {
    case REGISTER_LOADING:
      return { ...state, loading: true };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        errMsg: action.payload,
        success: false,
        err: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        err: false,
        errMsg: ''
      };
    case REGISTER_RESET:
      return {
        ...state,
        data: {},
        success: false,
        loading: false,
        err: false,
        errMsg: '',
      }
    default:
      return { ...state };
  }
};

export default register;
