import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';


const TasksIndexItem = (props) => (
  <div>
    <h1>{props.task.title}</h1>

  </div>
);

export default TasksIndexItem;