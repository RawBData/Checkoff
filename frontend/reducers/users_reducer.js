import { LOGIN_USER, LOGOUT_USER } from '../actions/session_actions';


export const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = {};
  switch (action.type) {
    case LOGIN_USER:
      //debugger;
      //nextState = Object.assign({}, oldState);
      nextState[action.user.id] = action.user;
      return nextState;
    case LOGOUT_USER:
      //debugger;
      nextState = {};
      return nextState;

    default:
      return oldState;
  }
};