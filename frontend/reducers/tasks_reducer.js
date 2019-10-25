import { RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK } from '../actions/tasks_actions';


const tasksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign( {}, oldState );
  switch (action.type) {
    case RECEIVE_TASKS:
        action.tasks.forEach(task => {
          task.checked = false;
          nextState[task.id]=task
        });
        return nextState;

    case RECEIVE_TASK:
        nextState[action.task.id]=action.task;     
        return nextState;

    case REMOVE_TASK:
      delete nextState[action.taskId];
      return nextState;

    default:
      return oldState;
  }
};

export default tasksReducer;