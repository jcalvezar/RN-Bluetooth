import {combineReducers} from 'redux';
import authReducer from './auth/reducer';
import desarrolloReducer from './desarrollo/reducer';
import logReducer from './desarrollo/reducer';

export default combineReducers({
  authReducer,
  desarrolloReducer,
  logReducer,
});
