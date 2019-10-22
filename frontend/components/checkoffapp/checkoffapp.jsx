import React from "react";
import BannerContainer from '../banner/banner_container';
import Menu from './menu/menu';
import TasksIndex from './tasks/tasks_index';
import TasksIndexContainer from './tasks/tasks_index_container';

import ListShow from './lists/list_show';
import TaskShow from './tasks/task_show';



class CheckoffApp extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        showMenu: true,
        selectedList: "All Tasks",
        displayTask:{},
        selectedTasks:[],
        showingTask: false,
      }

      this.toggleMenu = this.toggleMenu.bind(this);
      this.toggleTaskShowPanel = this.toggleTaskShowPanel.bind(this);
      this.displayTaskToggle = this.displayTaskToggle.bind(this);
      this.completeTask = this.completeTask.bind(this);
      this.updateTask = this.updateTask.bind(this);
    }

    componentDidMount(){
      this.props.fetchTasks();
    }

    toggleMenu(){
      this.setState({
        showMenu: !this.state.showMenu
      })
    }

    toggleTaskShowPanel(){
      this.setState({
        showingTask: !this.state.showingTask,
      })
    }

    

    displayTaskToggle(task){

      switch (task.on) {
        case true:
            if (this.state.selectedTasks.length < 1){
              this.setState({
                displayTask: task,
                selectedTasks: [task]
              });
              this.toggleTaskShowPanel();
            }else{
              let newSelectedArray = this.state.selectedTasks.concat([task])
              this.setState({
                selectedTasks: newSelectedArray
              });
            }
        break;
        case "delete":
            this.toggleTaskShowPanel();
            let newSelectedArray = this.state.selectedTasks.concat([task])
            this.setState({
              displayTask: {},
              selectedTasks: []
            });
        break;
        default:
            // this is the off statement that will remove from the list
            if (this.state.selectedTasks.length > 1){
              let onlyTask = this.state.selectedTasks
              let tasks = this.state.selectedTasks.filter(tsk => task.id !== tsk.id);


              onlyTask.pop()
              this.setState({
                displayTask: tasks[0],
                selectedTasks: tasks
              });
            }else{
              this.toggleTaskShowPanel();
              this.setState({
                displayTask: {},
                selectedTasks: []
              });
            }

         break;
      }

      console.log(task)
    }

    // completeTask(tsk.id)
    completeTask(taskID){
      let task = this.props.tasks.filter(tsk=>{return tsk.id === taskID})[0];
      task.complete = true;
      console.log(task);
      this.props.updateTask(task);
      
    }

    updateTask(newAttributeObject,task){
        
      let updatedTask = task;
      console.log("in checkoff update notes",newAttributeObject);
      console.log("notes",task);
      
      switch (newAttributeObject.type) {
          case "notes":
              this.setState({
                displayTask: task,
                selectedTasks: [task]
              })
                  
              updatedTask.newNote = newAttributeObject.note;

              console.group(updatedTask);
              this.props.updateTask(updatedTask);

          break;

          case "complete":
              this.setState({
                  // notes: this.props.task.notes.push(newAttributeObject.note)
              })
                  
              updatedTask.newNote = newAttributeObject.note;

              console.group(updatedTask);
              this.props.updateTask(updatedTask);

          break;
      
          default:
          break;
      }
      
      
      
  }


  
    render(){
      const currentUser = this.props.currentUser;

      const ShowMenuToggleClass = this.state.showMenu === true? ("main-body body-with-menu") : ("main-body body-without-menu");
  
      const display = (
          <div className="main-app">
            
            <BannerContainer className="main-banner" toggleMenu={this.toggleMenu}/>
            
            <div className={ShowMenuToggleClass}>

              <div className={"main-left-content-bar"}>
                  <figure>
                    <img src={window.logoURL_short} alt="logo-dark" className="app-logo"/>
                  </figure>
                  <Menu />
                  <div className="hire-me">
                    <hr/>
                    <a href="https://www.linkedin.com/in/benjaminrawner/">
                      <img className="personal_image_splash_03" src={window.personal_03} alt="personal03" />
                    </a>
                  </div>
              </div>

              <div className="main-tasks-index">
                <TasksIndexContainer 
                        tasks={this.props.tasks}
                        selectedTasks={this.state.selectedTasks}
                        fetchTask={this.props.fetchTask} 
                        deleteTask={this.props.deleteTask} 
                        createTask={this.props.createTask}
                        updateTask={this.updateTask}
                        completeTask={this.completeTask}
                        displayTaskToggle={this.displayTaskToggle}

                />
              </div>

              <div className="main-list-details">
                  <ListShow listName={this.state.selectedList} tasks={this.props.tasks}/>
              </div>

              <div className={this.state.showingTask?"main-task-show main-task-show-display":"main-task-show"}>
                  <TaskShow selectedTasksLength={this.state.selectedTasks.length} task={this.state.displayTask} updateTask={this.updateTask}/>
              </div>

            </div>
          </div>
      );
  
      return (
  
        <main>
          {display}
        </main>
      );
    }
  }
  
  export default CheckoffApp;