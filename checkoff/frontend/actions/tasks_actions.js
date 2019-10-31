import * as UTILTasks from '../util/tasks_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'DELETE_TASK'

export const TASK_ERRORS = 'TASK_ERRORS';
export const CLEAR_TASK_ERRORS = 'CLEAR_TASK_ERRORS';


export const receiveTasks = (tasks) => {
    
    return({
        type: RECEIVE_TASKS,
        tasks
    })
}
export const receiveTask = (task) => {
    //let ID = report.id;
    return({
        type: RECEIVE_TASK,
        task
    })
}
export const removeTask = (id) => {

    return({
        type: REMOVE_TASK,
        taskId: id
    })
}

export const receiveTasksErrors = errors => ({
    type: TASK_ERRORS,
    errors
});
  
  export const clearTasksErrors = () => {
    //debugger;
    return(
      {
        type:CLEAR_TASK_ERRORS
      }
    )
};



export const fetchTasks = () => dispatch => UTILTasks.fetchTasks()
.then(response => {
    dispatch(receiveTasks(response));
    dispatch(clearTasksErrors());
},
err => dispatch(receiveTasksErrors(err.responseJSON))
);

export const fetchTask = (id) => dispatch => UTILTasks.fetchTask(id)
.then(response => {
    dispatch(receiveTask(response));
    dispatch(clearTasksErrors());
},
err => dispatch(receiveTasksErrors(err.responseJSON))
);

export const createTask = (task) => dispatch => UTILTasks.createTask(task)
.then(response => {
    dispatch(receiveTask(response));
    dispatch(clearTasksErrors());
},
err => dispatch(receiveTasksErrors(err.responseJSON))
);

export const updateTask = (task) => dispatch => UTILTasks.updateTask(task)
.then(response => {
    dispatch(receiveTask(response));
    dispatch(clearTasksErrors());
},
err => dispatch(receiveTasksErrors(err.responseJSON))
);

export const deleteTask = (id) => dispatch => UTILTasks.deleteTask(id)
.then(response => {
    dispatch(removeTask(response.id))
    dispatch(clearTasksErrors());
},
err => dispatch(receiveTasksErrors(err.responseJSON))
);




