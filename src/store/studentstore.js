import { createStore,combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineForms } from 'react-redux-form'; 

import { authenticateUser } from '../controller/login.controller';
import { getStudentList } from '../controller/student.controller';

import  loginModel  from '../model/login.model';
import  studentModel  from '../model/student.model';

// redux form
const initialUserState  = { username: '', password: '' };
const combinedForm = combineForms({user: initialUserState});

// combine reducers and form into single one
const rootReducer = combineReducers({loginModel, studentModel ,  user: combinedForm});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
export const studentstore = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(authenticateUser);
sagaMiddleware.run(getStudentList);


