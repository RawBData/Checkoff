import { ERRORS, LOGIN_USER } from '../actions/session_actions';


export const sessionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = {};
  switch (action.type) {
    case LOGIN_USER:
      // nextState = Object.assign({}, oldState, {session:[]});
      nextState = [];
      return nextState;
    
    case ERRORS:
      nextState = [...action.errors];
      return nextState;

    default:
      return oldState;
  }
};