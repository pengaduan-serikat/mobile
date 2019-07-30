import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import login from '../reducers/login';
import register from '../reducers/register';
import listCase from '../reducers/cases';
import addComplaint from '../reducers/addComplaint';
import changePassword from '../reducers/changePassword';
import detailComplaint from '../reducers/detailComplaint';
import addFeedback from '../reducers/addFeedback'

const combined = combineReducers({ 
  login, 
  register, 
  listCase, 
  addComplaint, 
  changePassword,
  detailComplaint,
  addFeedback
});
const store = createStore(
  combined,
  applyMiddleware(thunk)
);

export default store;
