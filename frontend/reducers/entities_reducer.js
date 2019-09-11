import { combineReducers } from 'redux';
// import { sessionReducer } from '../reducers/session_reducer';
import { usersReducer } from '../reducers/users_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
});

export default entitiesReducer;