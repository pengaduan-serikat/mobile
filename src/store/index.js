import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import login from '../reducers/login';
import register from '../reducers/register';
import listCase from '../reducers/cases';
import addComplaint from '../reducers/addComplaint'

const combined = combineReducers({ login, register, listCase, addComplaint });
const store = createStore(
  combined,
  applyMiddleware(thunk)
);

export default store;
