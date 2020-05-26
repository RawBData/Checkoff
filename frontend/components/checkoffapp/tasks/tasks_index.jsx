import React from "react";
// import { Route } from 'react-router-dom';
// import LoginFormContainer from './login_signup_form/login_form_container';
// import SignupFormContainer from './login_signup_form/signup_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import BannerContainer from '../banner/banner_container';
// import Tasks from './tasks/tasks';
import TasksIndexItem from './tasks_index_item';
import NewTaskForm from './new_task_form';
import NewTagForm from './new_tag_form';



class TasksIndex extends React.Component {
    constructor(props){
        super(props)
        this.tasksArray = this.props.tasks
        this.state={
            tagDisplay:false,
            tasksSelectedToggled: false,
            tasks: [],
            tasksSelected: [],
            completedView:false,
            searching:false,
            searchCriteria:''
        }

        ///ONE_ONE
        this.tasksForDisplay = this.tasksForDisplay.bind(this);
        this.SearchingTasksDisplay = this.SearchingTasksDisplay.bind(this);
        
        this.deleteSelectedTasksArray = this.deleteSelectedTasksArray.bind(this);
        this.displayTaskToggle = this.displayTaskToggle.bind(this);
        this.refreshTasks = this.refreshTasks.bind(this);
        this.completeTask = this.completeTask.bind(this);
        this.toggleCompleteView = this.toggleCompleteView.bind(this);
        //tags
        this.addTag = this.addTag.bind(this);
        this.selectTag = this.selectTag.bind(this);
        this.createNewTag = this.createNewTag.bind(this);
        
    }

    componentDidMount(){
        // this.props.fetchTasks();

        setTimeout(this.tasksForDisplay,500);
    }

    toggleCompleteView(booly){
        let arrayForDisplay = booly? this.props.completedTasks : this.props.incompletedTasks;
        this.setState({
            completedView: booly,
            tasks: arrayForDisplay
        })
    }

    componentDidUpdate(){
        if(
            //checking to see if we are currently searching or if the search criteria is blank
            (!this.props.searching || this.props.searchCriteria.length<1)
                    && 
            (!this.state.completedView && (this.props.incompletedTasks.length !== this.state.tasks.length)) 
                    || 
            (this.state.completedView && (this.props.completedTasks.length !== this.state.tasks.length))
            ||
            //Checks to see if this is a subtask AND there are already subtasks AND the subtasks parent id's dont match up
            (this.props.subtask && this.state.tasks.length>0 && this.state.tasks[0].parent_id !== this.props.parentID)
        )
        {
            this.tasksForDisplay();
        }

        if(this.props.searching && this.props.searchCriteria.length>0 && this.props.searchResults.length !== this.state.tasks.length){
            this.SearchingTasksDisplay();
        }
    }

    tasksForDisplay(){
        let displayTasksArray = this.state.completedView? this.props.completedTasks : this.props.incompletedTasks;
        this.setState({
            tasks: displayTasksArray
         })
    }

    SearchingTasksDisplay(){
        const displayTasksArray = this.props.searchResults;
        this.setState({
            tasks: displayTasksArray,
         })
    }

    completeTask(){
        if (this.props.selectedTasks.length>0){
            if(this.props.subtask){
                this.props.completeSubtasks();
            }else{
                this.props.updateTask({type:"complete"},this.state.tasksSelected[0]);
            }
        }
    }

    onDragging(e, index){   
        this.draggedTask = this.state.tasks[index];
        e.dataTransfer.effectAllowed = "all";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    onDraggedOver(index){
        const draggedOverTask = this.state.tasks[index];
        //do nothing if task is trying to replace itself
        if (this.draggedTask === draggedOverTask) {
        return;
        }

        //get rest of tasks
        let tasks = this.state.tasks.filter(task => task !== this.draggedTask);
        //insert current task into array and set state
        tasks.splice(index, 0, this.draggedTask);
        this.setState({ tasks });
    };

    finishDragging(){
        this.draggedIdx = null;
    };

    deleteSelectedTasksArray(){
        if (this.props.selectedTasks.length>0){
            this.props.selectedTasks.forEach(tsk=>{
                this.props.deleteTask(tsk.id);
            })
            this.props.displayTaskToggle({on:"delete"});
        }
    }

    displayTaskToggle(task){
        if (!this.props.subtask){
            this.props.displayTaskToggle(task);
        }else{

        }
    }

    addTag(){
        if(this.props.selectedTasks.length>0){
            this.setState({tagDisplay:!this.state.tagDisplay})
        }
    }

    createNewTag(type,tag){
        this.props.updateTask(type,tag)
        this.setState({
            tagDisplay:false,
        });
    }

    selectTag(){
    }

    refreshTasks(){
        setTimeout(this.props.fetchTasks, 1000)
        this.tasksForDisplay();
    }

    
    render(){

        //add modularity by setting task or subtask forking
        const subtask = this.props.subtask? true : false;
        const parentID = this.props.subtask? this.props.parentID : null;
        const tasksIndexClass = this.props.subtask? "task-index-tasks-show":"task-index-tasks";
        const actionsRow2Display = this.state.tasksSelectedToggled?
        ("task-specific-actions")
        :
        ("hide-task-specific-actions");
        const tagSelectorDisplayClass = this.state.tagDisplay? "tag-selector-show" : "tag-selector-hide"

            
    
        const display = (
            
            <div className="tasks_index">
                <div className="tasks-index-actions">
                    <div className="actions-row-1">
                        <h5 className="action-link" onClick={()=>this.toggleCompleteView(true)}>complete</h5>
                        <h5 className="action-link" onClick={()=>this.toggleCompleteView(false)}>incomplete</h5>
                    </div>



                    
                    <div className="actions-row-2">
                        <i onClick={()=>this.deleteSelectedTasksArray()} className="fa fa-trash print-icon actions-row-2-icon trash"></i>
                        <i onClick={()=>this.completeTask()} className="fa fa-check print-icon actions-row-2-icon check"></i>
                        <div>
                            <div onClick={()=>this.addTag()} className="fa fa-tag print-icon actions-row-2-icon tag">
                            </div>
                            <div className={tagSelectorDisplayClass}>
                                <div>
                                    <NewTagForm 
                                        updateTask={this.createNewTag}
                                        refreshTasks={this.refreshTasks}
                                    />
                                </div>
                                

                                
                            </div>

                        </div>
                    </div>
                </div>

                <div className="tasks-index-new-task-form-container">
                    <NewTaskForm 
                        listID={this.props.listID}
                        subtask={subtask} 
                        createTask={this.props.createTask}
                        parentID={parentID}
                        subtask={this.props.subtask}
                    />
                </div>

                <div className={tasksIndexClass}>
                    <ul>
                        {this.state.tasks.map((task, idx )=> (<li draggable 
                                                                    key={task.id}
                                                                    onDragOver={() => this.onDraggedOver(idx)}
                                                                >
                                                                   
                                                                <div
                                                                    draggable
                                                                    key={task.created_at}
                                                                    onDragStart={e => this.onDragging(e, idx)}
                                                                    onDragEnd={()=>this.finishDragging()}
                                                                >
                                                                    <TasksIndexItem 
                                                                        displayTaskToggle={this.props.displayTaskToggle} 
                                                                        task={task}
                                                                    />
                                                                </div>
                                                                </li>))}
                    </ul>
                </div>
                
            </div>
        );
    
        return (
    
        <main className="task-index-container">
            {display}
            
        </main>
        );
    }
    }
    
    export default TasksIndex;