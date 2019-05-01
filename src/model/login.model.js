import actions from '../helper/actions';

const initialState = 
{ isAuthenticated: undefined } 
 
 export default function loginModel(state = initialState, action) {
   switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        isUserMessageVisible: false
      };
    case actions.LOGIN_FAILED:
      return {
          isAuthenticated: false,
          isUserMessageVisible: true
        };
    default:
      return state;
  }
}
