import { combineReducers } from 'redux';
import campuses from './campuses';
import students from './students';
import oneCampus from './oneCampus';
import oneStudent from './oneStudent';

const rootReducer = combineReducers({
  campuses,
  students,
  oneCampus,
  oneStudent,
});

export default rootReducer;

export * from './campuses';
export * from './students';
export * from './oneCampus';
export * from './oneStudent';
