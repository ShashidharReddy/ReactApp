import { call, put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

// APIs call to fetch the students details
const getStudentListMockAPI = () => {
     return (Axios.get('https://my-json-server.typicode.com/vishagh/mock/posts', {
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => response.data)
    .catch(err => {
      throw err;
    }));
}

// get the students list from server
function* fetchStudentList() {
    try{
        const students = yield call(getStudentListMockAPI);
        yield put({type: 'STUDENT_DETAILS_FETCH_SUCCESS', payload: students});
    } catch(e) {
        yield put({type: "STUDENT_DETAILS_FETCH_FAILED", message: e.message});
    }
}

export function* getStudentList() {
    yield takeEvery('GET_STUDENT_LIST', fetchStudentList);
}