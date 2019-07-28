import { ADD_FEEDBACK_ERROR, ADD_FEEDBACK_LOADING, ADD_FEEDBACK_SUCCESS, ADD_FEEDBACK_RESET } from '../store/actionType';

const initialState = {
  loading: false,
  err: false,
  errMsg: '',
  success : false
};

const addFeedback = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEEDBACK_LOADING:
      return { ...state, loading: true };
    case ADD_FEEDBACK_ERROR:
      return { 
        ...state, 
        loading: false, 
        errMsg: action.payload, 
        err : true, 
        success: false 
      };
    case ADD_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        err: false,
        errMsg: '',
        success : true
      };
    case ADD_FEEDBACK_RESET:
      return {
        loading: false,
        err: false,
        errMsg: '',
        success : false
      }
    default:
      return { ...state };
  }
};

export default addFeedback;