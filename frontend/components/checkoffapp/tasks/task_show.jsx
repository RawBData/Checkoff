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
    }

    componentDidMount(){
        
    }

    updateTask(newAttributeObject){
        
        let updatedTask = this.props.task;
        
        switch (newAttributeObject.type) {
            case "notes":
                this.setState({
                    notes: this.props.task.notes.push(newAttributeObject.note)
                })
                    
                updatedTask.newNote = newAttributeObject.note;

                console.group(updatedTask);
                this.props.updateTask(updatedTask);

            break;
        
            default:
            break;
        }
        
        
        
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
  
  
        console.log(task)
        
  
  
      }
    
    render(){
            
        console.log(this.props)


        const display = this.props.selectedTasksLength === 1?
        (
            <div className="task-show">
                <div className="task-details">
                <h1>{this.props.task.title}</h1>

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
                    />
                </div>
                
            </div>
        )
        :
        (
            
            <div className="task_show">
                
                <h1>more than one</h1>
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