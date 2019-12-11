import { combineReducers } from "redux";

import { sessionErrorsReducer } from "./session_errors_reducer";
import { tasksErrorsReducer } from "./tasks_errors_reducer";
<<<<<<< HEAD

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  tasks: tasksErrorsReducer
=======
import { listsErrorsReducer } from "./lists_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  tasks: tasksErrorsReducer,
  lists: listsErrorsReducer
>>>>>>> 241e2e361686c302b605e8e0484da50fb764acde
});

export default errorsReducer;