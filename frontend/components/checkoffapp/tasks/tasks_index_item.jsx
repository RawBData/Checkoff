import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';


// const TasksIndexItem = (props) => {
  
  
//   return(

//   <div className="task-index-item-container">
//     <div className="t_i_i_left-side">
//       <div className="priority-color"></div>
//       <div className="checkbox-container">
//         <input type="checkbox" name="vehicle1" value="task" className="task-checkbox checkmark"></input>
//       </div>
//       <h1>{props.task.title}</h1>
//     </div>

//     <div className="t_i_i_right-side">

//     </div>
    

//   </div>
  
//   )
// };

class TasksIndexItem extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      showMenu: true,
      selectedList: "All Tasks",
      checked: false,
    }
    this.onChecked = this.onChecked.bind(this);
  }

  componentDidMount(){

  }


  onChecked(e){
    console.log(e.target);
    let displayTask = this.props.task;
    if(this.state.checked){
      displayTask.on = false;
      this.props.displayTaskToggle(displayTask);
    }else{
      displayTask.on = true;
      this.props.displayTaskToggle(displayTask);
    }
    
    this.setState({
      checked: !this.state.checked,
    })
  }

  unCheck(){
    this.setState({
      checked: false,
    })
  }

  render(){
    return(

      <div className="task-index-item-container">
        <div className="t_i_i_left-side">
          <div className="priority-color"></div>
          <div className="checkbox-container">
            <input type="checkbox" 
              name="testing" 
              onChange={(e)=>{this.onChecked(e)}}
              checked={this.state.checked}
              value="task" 
              className="task-checkbox checkmark"
            ></input>
          </div>
          <h1>{this.props.task.title}</h1>
        </div>
    
        <div className="t_i_i_right-side">
    
        </div>
        
    
      </div>
      
      )
    }

}



export default TasksIndexItem;

/*

*/