import axios from 'axios';
// import socket from '../socket';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';

export function getCampuses(campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function getCampus(campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then((campuses) => {
        dispatch(getCampuses(campuses.data));
      });
  };
}

export function postCampus(campus, history) {
  return function thunk(dispatch) {
    return axios.post('/api/campuses', campus)
      .then((newCampus) => {
        dispatch(getCampus(newCampus.data));
        // socket.emit('new-campus', newCampus);
        // history.push(`/campuses/${newCampus.id}`);
      });
  };
}


export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return [...state, ...action.campuses];
    case GET_CAMPUS:
      return [...state, action.campus];
    default:
      return state;
  }
}
