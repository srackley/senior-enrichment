import { combineReducers } from 'redux';
import campuses from './campuses';
import students from './students';
import oneCampus from './oneCampus';
import oneStudent from './oneStudent';
import studentsFromCampus from './studentsFromCampus';

const rootReducer = combineReducers({
  campuses,
  students,
  oneCampus,
  oneStudent,
  studentsFromCampus,
});

export default rootReducer;

export * from './campuses';
export * from './students';
export * from './oneCampus';
export * from './oneStudent';
export * from './studentsFromCampus';
