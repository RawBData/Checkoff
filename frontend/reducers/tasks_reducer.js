import { RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK } from '../actions/tasks_actions';


const tasksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign( {}, oldState );
  switch (action.type) {
    case RECEIVE_TASKS:
        action.tasks.forEach(task => {
          task.tag_names=[];
          task.checked = false;
          nextState[task.id]=task
        });
        return nextState;

    case RECEIVE_TASK:
        let task = action.task;
        task.tag_names=[];
        task.checked = false;
        nextState[action.task.id]=task;     
        return nextState;

    case REMOVE_TASK:
      delete nextState[action.taskId];
      return nextState;

    default:
      return oldState;
  }
};

export default tasksReducer;