import { combineReducers } from 'redux';
import campuses from './campuses';
import students from './students';
import newStudent from './newStudent';
import newCampus from './newCampus';

const rootReducer = combineReducers({
  campuses,
  students,
  newStudent,
  newCampus,
});

export default rootReducer;

export * from './campuses';
export * from './students';
export * from './newStudent';
export * from './newCampus';
