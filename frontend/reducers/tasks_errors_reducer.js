import { TASK_ERRORS, CLEAR_TASK_ERRORS } from '../actions/session_actions';


export const tasksErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let nextState = {};
  switch (action.type) {
    case TASK_ERRORS:
      nextState = [...action.errors];
      return nextState;
    case CLEAR_TASK_ERRORS:
      nextState = [];
      return nextState;
    default:
      return oldState;
  }
};