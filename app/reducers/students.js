import axios from 'axios';

const GET_ONE_STUDENT = 'GET_ONE_STUDENT';
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const UPDATE = 'UPDATE';
const REMOVE = 'REMOVE';

const getStudent = student => ({ type: GET_ONE_STUDENT, student });
const getStudents = students => ({ type: GET_ALL_STUDENTS, students });
const update = student => ({ type: UPDATE, student });
const remove = id => ({ type: REMOVE, id });


export const fetchStudents = () => dispatch =>
  axios.get('/api/students')
    .then(students => dispatch(getStudents(students.data)));


export const postStudent = student => dispatch =>
  axios.post('/api/students', student)
    .then(newStudent => dispatch(getStudent(newStudent.data)));

export const updateStudent = (id, student) => (dispatch) => {
  axios.put(`/api/students/${id}`, student)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Updating student: ${student} unsuccessful`, err));
};

export const deleteStudent = id => (dispatch) => {
  dispatch(remove(id));
  axios.delete(`/api/students/${id}`)
    .catch(err => console.error(`Removing student: ${id} unsuccessful`, err));
};


export default function studentsReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return action.students;
    case GET_ONE_STUDENT:
      return [...state, action.student];
    case REMOVE:
      return state.filter(student => student.id !== action.id);
    case UPDATE:
      return state.map(student => (
        action.student.id === student.id ? action.student : student
      ));
    default:
      return state;
  }
}
