import React from 'react'
import {connect} from 'react-redux';
import TasksIndex from './tasks_index';
// import { login, clearErrors } from '../../actions/session_actions';
import { fetchTasks, fetchTask, createTask, updateTask, deleteTask } from '../../../actions/tasks_actions';


const MSP = (state, ownProps) => {
    let tasks = [];
    if(ownProps.parentID){
        tasks = Object.values(state.entities.tasks).filter(task => task.parent_id === ownProps.parentID)
    }else{
        if(ownProps.listID){
            tasks = Object.values(state.entities.tasks).filter(task => task.parent_id === null && task.list_id === ownProps.listID);
        }else{
            tasks = Object.values(state.entities.tasks).filter(task => task.parent_id === null);
        }
    }
    

    let completedTasks = tasks.filter(tsk=>(tsk.complete));
    let incompletedTasks = tasks.filter(tsk=>(!tsk.complete));

    //simple filter search looking for string 
    let searchResults = incompletedTasks.filter(tsk=>{
        return (
            ownProps.searchCriteria
            &&
            ownProps.searchCriteria.length>0 
            && 
            tsk.title.toLowerCase().indexOf(ownProps.searchCriteria.toLowerCase()) !== -1
        ); 
    });

    return (
        {
            tasks,
            completedTasks,
            incompletedTasks,
            searchResults,
            tasksErrors: state.errors.tasks
        }

    )
}

const MDP = (dispatch) => {
    return (
        {
            fetchTasks: ()=> dispatch(fetchTasks()), 
            fetchTask: (id)=>dispatch(fetchTask(id)), 
            createTask: (task)=> dispatch(createTask(task)), 
            deleteTask: (id)=> dispatch(deleteTask(id))

        }

    )
}

export default connect(MSP, MDP)(TasksIndex)

