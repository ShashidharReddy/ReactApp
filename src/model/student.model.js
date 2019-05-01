import actions from '../helper/actions';

const initialState = { 
  isStudentListLoaded: false,
  studentList: null,
  filteredStudentList: null,
  isStudentModalVisisble: false,
  numberOfPresentStudents: 0 } 
 
 export default function studentModel(state = initialState, action) {
   switch (action.type) {
    case actions.STUDENT_DETAILS_FETCH_SUCCESS:
    return {
      isStudentListLoaded: true,
      studentList: action.payload,
      filteredStudentList: action.payload,
      numberOfPresentStudents: action.payload.filter((student => student.status === 'Present')).length
    };
    case actions.STUDENT_DETAILS_FETCH_FAILED:
    return{
        isStudentListLoaded: false
    };
    case actions.FILTER_STUDENT_LIST:
    state.filteredStudentList = action.searchText.length === 0 ? state.studentList : 
      filterStudentList(action.searchText, state.studentList);
    return {
      ...state
    };
    case actions.OPEN_STUDENT_MODAL:
    let selectedStudent = state.filteredStudentList.filter(
      (student) => student.id === action.value.studentId)[0];
    return {
      ...state,
      selectedStudent: selectedStudent,
      isStudentModalVisisble: true
    };
    case actions.CLOSE_STUDENT_MODAL:
    return {
      ...state,
      selectedStudent: undefined,
      isStudentModalVisisble: false
    };
    case actions.ATTENDANCE_STATUS_CHANGED:
      updateStudent(action.value, state.studentList);
      return {
         ...state,
         numberOfPresentStudents: state.studentList.filter((student => student.status === 'Present')).length
      };
    default:
      return state;
  }

  function updateStudent(studentID, studentList) {
    return studentList.forEach((student)=> {
      if(student.id === studentID){
        student.status = student.status === 'Present' ? 'Absent' : 'Present';
      }
    });
  }

  function filterStudentList(searchText, studentList){
    return studentList.filter(
      (student) => student.name.toLowerCase().indexOf(searchText) === 0);
  }
}