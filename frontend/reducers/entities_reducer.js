import { combineReducers } from 'redux';
// import { sessionReducer } from '../reducers/session_reducer';
import { usersReducer } from '../reducers/users_reducer';
import tasksReducer from '../reducers/tasks_reducer';
import listsReducer from './lists_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
  lists: listsReducer
});

export default entitiesReducer;