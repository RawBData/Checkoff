import React, {createRef, forwardRef, useRef, useImperativeHandle} from 'react';
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
        selectedList: null,
        selectedListID: null,
        displayTask:{},
        selectedTasks:[],
        showingTask: false,
        searching: false,
        searchCriteria:''
      }

      // this.clock = React.createRef();

      this.toggleMenu = this.toggleMenu.bind(this);
      this.toggleTaskShowPanel = this.toggleTaskShowPanel.bind(this);
      this.displayTaskToggle = this.displayTaskToggle.bind(this);
      this.completeTask = this.completeTask.bind(this);
      this.updateTask = this.updateTask.bind(this);
      this.deleteTasks = this.deleteTasks.bind(this);
      this.changeListDisplay = this.changeListDisplay.bind(this);
      this.reset = this.reset.bind(this);
      this.setSearchCriteria = this.setSearchCriteria.bind(this);
      this.searchFilterToggle = this.searchFilterToggle.bind(this);
    }

    componentDidMount(){
      this.props.fetchTasks();
      this.props.fetchLists();
    }

    searchFilterToggle(){
      this.setState({searching:!this.state.searching});
    }

    setSearchCriteria(searchCriteria){
      this.setState({searchCriteria})

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
        
        case "dismiss":
            // this.taskChecked.current.unCheck();
            this.state.selectedTasks.forEach(tsk=>{
              tsk.checked=false;
            })
            this.setState({
              showingTask: !this.state.showingTask,
              displayTask: {},
              selectedTasks: []
            });
        break;

        case "delete":
            this.toggleTaskShowPanel();
            // let newSelectedArray = this.state.selectedTasks.concat([task])
            this.setState({
              displayTask: {},
              selectedTasks: []
            });
        break;

        case "clicked":
            if(this.state.selectedTasks.length === 1 && this.state.selectedTasks[0].id === task.id){
              task.on = "dimiss";
              task.checked = false;
              this.displayTaskToggle(task);
            }else{
              this.state.selectedTasks.forEach(tsk=>{
                tsk.checked=false;
              })
              task.checked=true;
              this.setState({
                displayTask: task,
                selectedTasks: [task],
                showingTask:true,
              });
            }

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

    }

    // completeTask(tsk.id)
    completeTask(taskID){
      let task = this.props.tasks.filter(tsk=>{return tsk.id === taskID})[0];
      task.complete = true;
      this.props.updateTask(task);
      
    }

    deleteTasks(){
      this.state.selectedTasks.forEach(tsk=>{
        this.props.deleteTask(tsk.id);
      })
    }

    updateTask(newAttributeObject,task){
      let updatedTask = Array.isArray(task)? task : Object.assign({},task);
      switch (newAttributeObject.type) {

          case "title":
          case "due_date":
          case "list":
            this.props.updateTask(updatedTask);
          break;

          case "notes":
              this.setState({
                displayTask: task,
                selectedTasks: [task]
              })
                  
              updatedTask.newNote = newAttributeObject.note;

              this.props.updateTask(updatedTask);
          break;

          case "complete":
              this.state.selectedTasks.forEach(tsk=>{
                tsk.complete = true;
                this.props.updateTask(tsk);
              })

              this.setState({
                displayTask: {},
                selectedTasks: [],
                showingTask: false,
              })
          break;

          case "tags":
            
            //in this case we are passing the tags in "task" variable of the function
            let newTags = updatedTask;
            this.state.selectedTasks.forEach(tsk=>{
              let currentTags=[];
              if(tsk.tags.length>0){
                tsk.tags.forEach(t=>currentTags.push(t.title))
              }
              tsk.tag_names=[...currentTags, ...newTags];
              this.props.updateTask(tsk);
              tsk.tags = tsk.tags.concat(newTags.map(tg=>({title:tg})));
            })


          break;
      
          default:
          break;
      }
      
      
      
    
    
    }

    changeListDisplay(list){
      this.reset();
      setTimeout(()=>{
        this.setState({
          selectedList:list.name,
          selectedListID:list.id,
          searching:false,
        })
      },0);
      if (this.state.selectedTasks.length>0) this.displayTaskToggle({on:"dismiss"});
    }

    reset(){
      this.setState({
        selectedList:undefined,
        selectedListID:undefined
      })
    }


  
    render(){
      const currentUser = this.props.currentUser;

      const ShowMenuToggleClass = this.state.showMenu === true? ("main-body body-with-menu") : ("main-body body-without-menu");
  
      const display = (
          <div className="main-app">
            
            <BannerContainer 
              className="main-banner" 
              showingTask={this.state.showingTask}
              toggleTaskShow={this.displayTaskToggle}
              toggleMenu={this.toggleMenu} 
              searching={this.state.searching} 
              toggleSearch={this.searchFilterToggle} 
              getSearchCriteria={this.setSearchCriteria} 
              setSearchValue={this.state.searchCriteria}/>
            
            <div className={ShowMenuToggleClass}>

              <div className={"main-left-content-bar"}>
                  <figure>
                    <img src={window.logoURL_short} alt="logo-dark" className="app-logo"/>
                  </figure>

                  <Menu 
                    currentSelectedListID={this.state.selectedListID}
                    changeListDisplay={this.changeListDisplay}
                    lists={this.props.lists}
                    createList={this.props.createList}
                    deleteList={this.props.deleteList}
                  />

                  <div className="hire-me">
                    <hr/>
                    <a href="https://www.linkedin.com/in/benjaminrawner/" target="_blank">
                      <img className="personal_image_splash_03" src={window.personal_03} alt="personal03" />
                    </a>
                  </div>
              </div>

              <div className={this.state.showMenu?"main-tasks-index":"main-tasks-index mti-no-menu"}>
                <TasksIndexContainer
                        listName={this.state.selectedList}
                        listID={this.state.selectedListID}
                        selectedTasks={this.state.selectedTasks}
                        fetchTask={this.props.fetchTask} 
                        deleteTasks={this.props.deleteTask} 
                        createTask={this.props.createTask}
                        updateTask={this.updateTask}
                        completeTask={this.completeTask}
                        displayTaskToggle={this.displayTaskToggle}
                        searchCriteria={this.state.searchCriteria}
                        searching={this.state.searching}
                />
              </div>

              <div className="main-list-details">
                  <ListShow 
                    listName={this.state.selectedList} 
                    tasks={this.props.tasks}
                    changeListDisplay={this.changeListDisplay}
                    />
              </div>

              <div className={this.state.showingTask?"main-task-show main-task-show-display":"main-task-show"}>
                  <TaskShow selectedTasksLength={this.state.selectedTasks.length} 
                            task={this.state.displayTask} 
                            updateTask={this.updateTask}
                            displayTaskToggle={this.displayTaskToggle}
                            deleteTasks={this.deleteTasks}
                            completeSubtasks={this.props.updateTask}
                            lists={this.props.lists}
                  />
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