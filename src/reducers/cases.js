import { GET_CASES_ERROR, GET_CASES_LOADING, GET_CASES_SUCCESS, GET_CASES_RESET } from '../store/actionType';

const initialState = {
  data: {},
  loading: false,
  err: false,
  errMsg: '',
  cases : []
};

const listCase = (state = initialState, action) => {
  switch (action.type) {
    case GET_CASES_LOADING:
      return { ...state, loading: true };
    case GET_CASES_ERROR:
      return { ...state, loading: false, errMsg: action.payload, err : true, cases : [] };
    case GET_CASES_SUCCESS:
      return {
        ...state,
        loading: false,
        err: false,
        errMsg: '',
        cases : action.payload
      };
    case GET_CASES_RESET:
      return {
        data: {},
        loading: false,
        err: false,
        errMsg: '',
        cases : []
      }
    default:
      return { ...state };
  }
};

export default listCase;
