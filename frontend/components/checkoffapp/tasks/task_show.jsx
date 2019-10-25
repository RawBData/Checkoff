import React from "react";
// import { Route } from 'react-router-dom';
// import LoginFormContainer from './login_signup_form/login_form_container';
// import SignupFormContainer from './login_signup_form/signup_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import BannerContainer from '../banner/banner_container';
// import Tasks from './tasks/tasks';
import TasksIndexItem from './tasks_index_item';
import NewTaskForm from './new_task_form';
import TasksIndexContainer from './tasks_index_container';
import Notes from './notes/notes';



class TaskShow extends React.Component {
    constructor(props){
        super(props)
        this.state={
            selectedSubTasks:[],
        }

        this.displayTaskToggle = this.displayTaskToggle.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.hideTaskShow = this.hideTaskShow.bind(this);
        this.deleteTasks = this.deleteTasks.bind(this);
        this.completeSubtasks = this.completeSubtasks.bind(this);
    }

    componentDidMount(){
        
    }

    updateTask(newAttributeObject){
        
        
        this.props.updateTask(newAttributeObject,this.props.task);
        this.setState({
            notes: this.props.task.notes.push(newAttributeObject.note)
        })
        
    }


    displayTaskToggle(task){

        switch (task.on) {
          case true:
              if (this.state.selectedSubTasks.length < 1){
                this.setState({
                  selectedSubTasks: [task]
                });
              }else{
                let newSelectedArray = this.state.selectedSubTasks.concat([task])
                this.setState({
                  selectedSubTasks: newSelectedArray
                });
              }
          break;

          case "delete":
              let newSelectedArray = this.state.selectedSubTasks.concat([task])
              this.setState({
                selectedSubTasks: []
              });
          break;

          case "dismiss":
              console.log("in display toggle dismiss")
              this.setState({
                selectedSubTasks: []
              });
          break;

          case "clicked":
              if(this.state.selectedSubTasks.length === 1 && this.state.selectedSubTasks[0].id === task.id){
                task.on = "dimiss";
                task.checked = false;
                this.displayTaskToggle(task);
              }else if(this.state.selectedSubTasks.length > 0){
                if(this.state.selectedSubTasks.some(tsk=>(tsk.id === task.id))){
                  task.checked = false;
                  this.setState({
                    selectedSubTasks: this.state.selectedSubTasks.filter(tsk=>(tsk.id !== task.id))
                  })              
                }else{
                  task.checked=true;
                  this.setState({
                    selectedSubTasks: this.state.selectedSubTasks.concat(task),
                });
                }
              }else{
                task.checked=true;
                this.setState({
                  selectedSubTasks: [task],
                });
              }
  
          break;
          

          default:
              // this is the off statement that will remove from the list
              if (this.state.selectedSubTasks.length > 1){
                let onlyTask = this.state.selectedSubTasks
                let tasks = this.state.selectedSubTasks.filter(tsk => task.id !== tsk.id);
  
  
                onlyTask.pop()
                this.setState({
                  selectedSubTasks: tasks
                });
              }else{
                this.setState({
                  selectedSubTasks: []
                });
              }
           break;


        }
  
  
        
        
  
  
    }

    upd(field){
      console.log(field);
    }

    hideTaskShow(){
      this.props.displayTaskToggle({on:"dismiss"})
    }

    deleteTasks(){
      this.props.deleteTasks();
      this.hideTaskShow();
    }

    completeSubtasks(){
      this.state.selectedSubTasks.forEach(tsk=>{
        tsk.complete = true;
        this.props.completeSubtasks(tsk);
      })
      
    }

    
    render(){
            
        console.log(this.props)

        // list of all categories complete, due_date, list_id, parent_id, priority, start_date and need to add tags in DB

        const display = this.props.selectedTasksLength === 1?
        (
            <div className="task-show">
                <div className="task-details">
                  <div className={"close-button-container"}>
                    <div className="close-task-button" onClick={this.hideTaskShow}>
                        <h5>close x</h5>
                    </div>
                  </div>
                  <div>
                    <input  className="task-show-input" onKeyPress={this.keyPressed} type="text" value={this.props.task.title} onChange={this.upd('title')}/>
                  </div>
                  <div>
                    <div>
                      {/* Need to set this up to auto populate other then due and list */}
                      <h3>due</h3>
                      <input type="text"/>
                    </div>
                    list : Drop Down Menu
                  </div>
                  <div>

                  </div>
                </div>
                <div className="task-notes">
                    <Notes 
                        updateTask={this.updateTask}
                        notes={this.state.task? this.state.task.notes : this.props.task.notes}
                    />
                </div>
                <div className="subtasks">
                    <TasksIndexContainer 
                            selectedTasks={this.state.selectedSubTasks}
                            subtask={true}
                            parentID={this.props.task.id}
                            tasks={this.props.tasks}
                            fetchTask={this.props.fetchTask} 
                            deleteTask={this.props.deleteTask} 
                            createTask={this.props.createTask}
                            updateTask={this.props.updateTask}
                            displayTaskToggle={this.displayTaskToggle}
                            completeSubtasks={this.completeSubtasks}
                    />
                </div>
                
            </div>
        )
        :
        (
            
            <div className="task_show">
                <div className={"close-button-container"}>
                  <div className="close-task-button" onClick={this.hideTaskShow}>
                      <h5>close x</h5>
                  </div>
                </div>
                <div className={"close-button-container"}>
                  <div className="close-task-button" onClick={this.deleteTasks}>
                      <h5>Delete Tasks</h5>
                  </div>
                </div>
            </div>
        );
    
        return (
    
        <main className="task-show-container">
            {display}    
        </main>
        );
    }
    }
    
    export default TaskShow;