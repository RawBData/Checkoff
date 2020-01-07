import { combineReducers } from "redux";

import { sessionErrorsReducer } from "./session_errors_reducer";
import { tasksErrorsReducer } from "./tasks_errors_reducer";
import { listsErrorsReducer } from "./lists_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  tasks: tasksErrorsReducer,
  lists: listsErrorsReducer
});

export default errorsReducer;