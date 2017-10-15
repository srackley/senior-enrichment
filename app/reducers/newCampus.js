const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';

export function writeCampusName(campus) {
  const action = { type: WRITE_CAMPUS_NAME, campus };
  return action;
}

export default function newCampusReducer(state = '', action) {
  switch (action.type) {
    case WRITE_CAMPUS_NAME:
      return action.campus;
    default:
      return state;
  }
}
