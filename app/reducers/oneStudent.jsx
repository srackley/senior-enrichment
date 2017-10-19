import axios from 'axios';
// import socket from '../socket';

const FIND_STUDENT = 'FIND_STUDENT';

export function findStudent(student) {
  const action = { type: FIND_STUDENT, student };
  return action;
}

export function fetchStudent(studentId) {
  return function thunk(dispatch) {
    return axios.get(`/api/students/${studentId}`)
      .then((student) => {
        dispatch(findStudent(student.data));
      });
  };
}

export default function studentReducer(state = {}, action) {
  switch (action.type) {
    case FIND_STUDENT:
      return action.student;
    default:
      return state;
  }
}

// EAGER-LOADING LOOK IT UP
