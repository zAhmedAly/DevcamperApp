import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import bootcamp from './bootcamp';
import course from './course';
import review from './review';

export default combineReducers({
  alert,
  auth,
  bootcamp,
  course,
  review,
});
