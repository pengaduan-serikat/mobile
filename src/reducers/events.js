import { LIST_EVENT_ERROR, LIST_EVENT_LOADING, LIST_EVENT_SUCCESS, LIST_EVENT_RESET } from '../store/actionType';

const initialState = {
  data: {},
  loading: false,
  err: false,
  errMsg: '',
  events : []
};

const listEvent = (state = initialState, action) => {
  switch (action.type) {
    case LIST_EVENT_LOADING:
      return { ...state, loading: true };
    case LIST_EVENT_ERROR:
      return { 
        ...state, 
        loading: false, 
        errMsg: action.payload, 
        err : true, 
        events : [] 
    };
    case LIST_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        err: false,
        errMsg: '',
        events : action.payload
      };
    case LIST_EVENT_RESET:
      return {
        data: {},
        loading: false,
        err: false,
        errMsg: '',
        events : []
      }
    default:
      return { ...state };
  }
};

export default listEvent;
