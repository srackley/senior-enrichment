const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';

export function writeCampusName(campusName) {
  const action = { type: WRITE_CAMPUS_NAME, campusName };
  return action;
}

export default function reducer(state = '', action) {
  switch (action.type) {
    case WRITE_CAMPUS_NAME:
      return action.campusName;
    default:
      return state;
  }
}
