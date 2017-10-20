import axios from 'axios';

const GET_ONE_STUDENT = 'GET_ONE_STUDENT';
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

const getStudent = student => ({ type: GET_ONE_STUDENT, student });
const getStudents = students => ({ type: GET_ALL_STUDENTS, students });
const update = student => ({ type: UPDATE_STUDENT, student });
const remove = id => ({ type: REMOVE_STUDENT, id });


export const fetchStudents = () => dispatch =>
  axios.get('/api/students')
    .then(students => dispatch(getStudents(students.data)));


export const postStudent = student => dispatch =>
  axios.post('/api/students', student)
    .then(newStudent => dispatch(getStudent(newStudent.data)));

export const updateStudent = (id, student) => (dispatch) => {
  dispatch(update(student));
  axios.put(`/api/students/${id}`, student)
    .catch(err => console.error(`Updating student: ${student.name} unsuccessful`, err));
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
    case REMOVE_STUDENT:
      return state.filter(student => student.id !== action.id);
    case UPDATE_STUDENT:
      return state.map(student => (
        action.student.id === student.id ? action.student : student
      ));
    default:
      return state;
  }
}
