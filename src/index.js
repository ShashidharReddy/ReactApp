import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import { authenticationstore } from '../src/store/authentictionstore';
import {studentstore} from '../src/store/studentstore';
import  App  from './App';

render(
    <Provider store={studentstore}>
        <App />
    </Provider>,
    document.getElementById('app')
);