import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';


class TasksIndexItem extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      showMenu: true,
      selectedList: "All Tasks",
      checked: false,
    }
    this.onChecked = this.onChecked.bind(this);
    this.taskClicked = this.taskClicked.bind(this);
  }

  componentDidMount(){

  }

  componentDidUpdate(){
    // if(this.props.task.checked !== this.state.checked) this.setState({checked:this.props.checked});
    // this.setState({checked:this.props.tasks.checked});
  }


  // onChecked(e){
  //   console.log(e.target);
  //   let displayTask = this.props.task;
  //   if(this.state.checked){
  //     displayTask.on = false;
  //     displayTask.checked=false;
  //     this.props.displayTaskToggle(displayTask);
  //   }else{
  //     displayTask.on = true;
  //     displayTask.checked=true;
  //     this.props.displayTaskToggle(displayTask);
  //   }
    
  //   this.setState({
  //     checked: !this.state.checked,
  //   })
  // }

  onChecked(e){
    console.log(e.target);
    let displayTask = this.props.task;
    if(displayTask.checked){
      displayTask.on = false;
      displayTask.checked=false;
      this.props.displayTaskToggle(displayTask);
    }else{
      displayTask.on=true;
      displayTask.checked=true;
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

  taskClicked(e){

  }

  render(){
    return(

      <div className="task-index-item-container" onClick={this.taskClicked}>
        <div className="t_i_i_left-side">
          <div className="priority-color"></div>
          <div className="checkbox-container">
            <input type="checkbox" 
              name="testing" 
              onChange={(e)=>{this.onChecked(e)}}
              checked={this.props.task.checked}
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