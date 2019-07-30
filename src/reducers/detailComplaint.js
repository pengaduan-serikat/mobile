import { DETAIL_COMPLAINT_ERROR, DETAIL_COMPLAINT_LOADING, DETAIL_COMPLAINT_SUCCESS, DETAIL_COMPLAINT_RESET } from '../store/actionType';

const initialState = {
  loading: false,
  err: false,
  errMsg: '',
  success : false,
  // successMsg : null
  data : {}
};

const detailComplaint = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_COMPLAINT_LOADING:
      return { ...state, loading: true };
    case DETAIL_COMPLAINT_ERROR:
      return { 
        ...state, 
        loading: false, 
        errMsg: action.payload, 
        err : true, 
        success: false,
        // successMsg : null
        data : {}
      };
    case DETAIL_COMPLAINT_SUCCESS:
      return {
        ...state,
        loading: false,
        err: false,
        errMsg: '',
        success : true,
        // successMsg : action.payload
        data : action.payload  
      };
    case DETAIL_COMPLAINT_RESET:
      return {
        loading: false,
        err: false,
        errMsg: '',
        success : false,
        // successMsg : null
        data : {}
      }
    default:
      return { ...state };
  }
};

export default detailComplaint;