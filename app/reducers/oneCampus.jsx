import axios from 'axios';
// import socket from '../socket';

const FIND_CAMPUS = 'FIND_CAMPUS';

export function findCampus(campus) {
  const action = { type: FIND_CAMPUS, campus };
  return action;
}

export function fetchCampus(campusId) {
  return function thunk(dispatch) {
    return axios.get(`/api/campuses/${campusId}`)
      .then((campus) => {
        dispatch(findCampus(campus.data));
      });
  };
}

export default function campusReducer(state = {}, action) {
  switch (action.type) {
    case FIND_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}

// EAGER-LOADING LOOK IT UP
