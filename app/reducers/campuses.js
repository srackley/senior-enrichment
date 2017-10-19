import axios from 'axios';

const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS';
const UPDATE = 'UPDATE';
const REMOVE = 'REMOVE';

const getCampuses = campuses => ({ type: GET_ALL_CAMPUSES, campuses });
const getCampus = campus => ({ type: GET_ONE_CAMPUS, campus });
const update = campus => ({ type: UPDATE, campus });
const remove = id => ({ type: REMOVE, id });

export const fetchCampuses = () => dispatch =>
  axios.get('/api/campuses')
    .then(campuses => dispatch(getCampuses(campuses.data)))
    .catch(err => console.error('Fetching campuses unsuccessful', err));

export const postCampus = campus => dispatch =>
  axios.post('/api/campuses', campus)
    .then(newCampus => dispatch(getCampus(newCampus.data)))
    .catch(err => console.error(`Creating campus: ${campus} unsuccessful`, err));


export const updateCampus = (id, campus) => (dispatch) => {
  axios.put(`/api/campuses/${id}`, campus)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Updating campus: ${campus} unsuccessful`, err));
};

export const deleteCampus = id => (dispatch) => {
  dispatch(remove(id));
  axios.delete(`/api/campuses/${id}`)
    .catch(err => console.error(`Removing campus: ${id} unsuccessful`, err));
};

export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_CAMPUSES:
      return action.campuses;
    case GET_ONE_CAMPUS:
      return action.campus;
    case REMOVE:
      return state.filter(campus => campus.id !== action.id);
    case UPDATE:
      return state.map(campus => (
        action.campus.id === campus.id ? action.campus : campus
      ));
    default:
      return state;
  }
}
