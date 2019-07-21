import { ADD_COMPLAINT_ERROR, ADD_COMPLAINT_LOADING, ADD_COMPLAINT_SUCCESS, ADD_COMPLAINT_RESET } from '../store/actionType';

const initialState = {
  loading: false,
  err: false,
  errMsg: '',
  success : false
};

const addComplaint = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPLAINT_LOADING:
      return { ...state, loading: true };
    case ADD_COMPLAINT_ERROR:
      return { 
        ...state, 
        loading: false, 
        errMsg: action.payload, 
        err : true, 
        success: false 
      };
    case ADD_COMPLAINT_SUCCESS:
      return {
        ...state,
        loading: false,
        err: false,
        errMsg: '',
        success : true
      };
    case ADD_COMPLAINT_RESET:
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

export default addComplaint;