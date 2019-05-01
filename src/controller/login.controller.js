import { put, takeEvery } from 'redux-saga/effects'

// authenticate entered value
function* authenticateCredentials(action) {
    if(action.value.user.username === 'admin' && action.value.user.password === 'admin'){
        yield put({type: 'LOGIN_SUCCESS'});
    } else {
        yield put({type: "LOGIN_FAILED"});
    }
}

export function* authenticateUser() {
    yield takeEvery('LOGIN', authenticateCredentials);
}