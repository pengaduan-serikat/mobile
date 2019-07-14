import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from '../store/actionType';

const initialState = {
  data: {},
  loading: false,
  err: false,
  errMsg: '',
};

const login = (state = initialState, action) => {
  switch (action) {
    case LOGIN_LOADING:
      return { ...state, loading: true };
    case LOGIN_ERROR:
      return { ...state, loading: true, errMsg: action.payload };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        err: false,
        errMsg: ''
      };
    default:
      return { ...state };
  }
};

export default login;
