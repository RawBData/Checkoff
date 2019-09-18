import { ERRORS, LOGIN_USER, CLEAR_ERRORS } from '../actions/session_actions';


export const sessionErrorsReducer = (oldState = [], action) => {
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

    case CLEAR_ERRORS:
      nextState = [];
      return nextState;
    default:
      return oldState;
  }
};