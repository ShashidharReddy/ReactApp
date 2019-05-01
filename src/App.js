
import { Router, Route } from 'react-router';
import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';

import Login from './components/login/Login';
import HomePage from './components/student/homepage';

const history = createBrowserHistory();

class App extends React.Component {
    render() {      
        return (
          <Router history={history}>
            <div>
              <Route exact path="/" component={Login} />
              <Route path="/homepage" component={HomePage} />
            </div>
          </Router>);
      }
}
export default App; 













// import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import { Login } from '../src/components/login/Login';
// import { HomePage } from '../src/components/homepage'

// class App extends React.Component {
//     render() {      
//         return (
//             <div>
//                 <BrowserRouter>                   
//                     <Switch>
//                         <Route exact path="/" component={Login} />            
//                         <Route  path="/homepage" component={HomePage} />
//                     </Switch>                
//                 </BrowserRouter>
//             </div>
//         );
//     }
// }
// export default App; 