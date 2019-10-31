import { LIST_ERRORS, CLEAR_LIST_ERRORS } from '../actions/lists_actions';


export const listsErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let nextState = {};
  switch (action.type) {
    case LIST_ERRORS:
      nextState = [...action.errors];
      return nextState;
    case CLEAR_LIST_ERRORS:
      nextState = [];
      return nextState;
    default:
      return oldState;
  }
};