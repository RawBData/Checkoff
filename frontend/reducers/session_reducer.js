import { LOGIN_USER, LOGOUT_USER } from '../actions/session_actions';
const _nullSession = {
  id: null
};

export const sessionReducer = (oldState = _nullSession, action) => {
  Object.freeze(oldState);
  let nextState = {};
  switch (action.type) {
    case LOGIN_USER:
      // nextState = Object.assign({}, oldState);
      nextState = {id: action.user.id};
      return nextState;
      
    case LOGOUT_USER:
      nextState = _nullSession;
      return nextState;

    default:
      return oldState;
  }
};