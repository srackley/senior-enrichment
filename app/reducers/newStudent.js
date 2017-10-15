const WRITE_STUDENT = 'WRITE_STUDENT';

export function writeStudent(content) {
  const action = { type: WRITE_STUDENT, content };
  return action;
}

export default function newStudentReducer(state = '', action) {
  switch (action.type) {
    case WRITE_STUDENT:
      return action.content;
    default:
      return state;
  }
}
