import { combineReducers } from 'redux';
// import { sessionReducer } from '../reducers/session_reducer';
import { usersReducer } from '../reducers/users_reducer';
import tasksReducer from '../reducers/tasks_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer
});

export default entitiesReducer;