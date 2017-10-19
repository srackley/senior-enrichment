import axios from 'axios';
// import socket from '../socket';

const FIND_STUDENTS_FROM_CAMPUS = 'FIND_STUDENTS_FROM_CAMPUS';

export function findStudentsFromCampus(studentsFromCampus) {
  const action = { type: FIND_STUDENTS_FROM_CAMPUS, studentsFromCampus };
  return action;
}

export function fetchStudentsFromCampus(campusId) {
  return function thunk(dispatch) {
    return axios.get(`/api/campuses/${campusId}/students`)
      .then((students) => {
        dispatch(findStudentsFromCampus(students.data));
      });
  };
}

export default function studentReducer(state = [], action) {
  switch (action.type) {
    case FIND_STUDENTS_FROM_CAMPUS:
      return action.studentsFromCampus;
    default:
      return state;
  }
}
