import { combineReducers } from 'redux';
import system from './system';
import notifications from './notifications';

export default combineReducers({
  system,
  notifications,
});
