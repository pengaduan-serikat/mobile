import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS
} from '../store/actionType';

const initialState = {
  data: {},
  success: false,
  loading: false,
  err: false,
  errMsg: '',
};

const register = (state = initialState, action) => {
  switch (action) {
    case REGISTER_LOADING:
      return { ...state, loading: true };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: true,
        errMsg: action.payload,
        success: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        err: false,
        errMsg: ''
      };
    default:
      return { ...state };
  }
};

export default register;
