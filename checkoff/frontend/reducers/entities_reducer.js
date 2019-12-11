import { combineReducers } from 'redux';
// import { sessionReducer } from '../reducers/session_reducer';
import { usersReducer } from '../reducers/users_reducer';
import tasksReducer from '../reducers/tasks_reducer';
<<<<<<< HEAD
=======
import listsReducer from './lists_reducer';
>>>>>>> 241e2e361686c302b605e8e0484da50fb764acde


const entitiesReducer = combineReducers({
  users: usersReducer,
<<<<<<< HEAD
  tasks: tasksReducer
=======
  tasks: tasksReducer,
  lists: listsReducer
>>>>>>> 241e2e361686c302b605e8e0484da50fb764acde
});

export default entitiesReducer;