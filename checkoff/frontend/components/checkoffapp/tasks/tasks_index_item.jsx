import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';


const TasksIndexItem = (props) => {
  
  
  return(

  <div className="task-index-item-container">
    <div className="t_i_i_left-side">
      <div className="priority-color"></div>
      <div className="checkbox-container">
        <input type="checkbox" name="vehicle1" value="task" className="task-checkbox checkmark"></input>
      </div>
      <h1>{props.task.title}</h1>
    </div>

    <div className="t_i_i_right-side">

    </div>
    

  </div>
  
  )
};

export default TasksIndexItem;