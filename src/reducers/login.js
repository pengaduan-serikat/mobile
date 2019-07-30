import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_RESET } from '../store/actionType';

const initialState = {
  data: {},
  loading: false,
  err: false,
  errMsg: '',
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return { ...state, loading: true };
    case LOGIN_ERROR:
      return { ...state, loading: false, errMsg: action.payload, err : true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        err: false,
        errMsg: ''
      };
    case LOGIN_RESET:
      return {
        data: {},
        loading: false,
        err: false,
        errMsg: '',
      }
    default:
      return { ...state };
  }
};

export default login;
