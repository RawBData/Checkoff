import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Tag from './tags/tag';


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
    // console.log(e.target);
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
    // console.log('clicked');
    let displayTask = this.props.task;
    displayTask.on="clicked";
    displayTask.checked=true;
    this.props.displayTaskToggle(displayTask);
  }

  render(){
    

    let taskTags = this.props.task.tag_names.length>0? this.props.task.tag_names : this.props.task.tags.map(tsk=>(tsk.title))
    // this.props.task.tags.concat(this.props.task.tag_names);
    // console.log(taskTags)

    return(

      <div className="task-index-item-container">
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
        </div>

        <div  className="t_i_i_task" onClick={this.taskClicked}>
          <div className="task-description">
            <h1>{this.props.task.title}</h1>
          </div>
      
          <div className="t_i_i_right-side">
            {taskTags.map(tag=>(
              <Tag tag={tag} key={tag.title}/>
            ))}
          </div>
        </div>
        
    
      </div>
      
      )
    }

}



export default TasksIndexItem;

/*

*/
