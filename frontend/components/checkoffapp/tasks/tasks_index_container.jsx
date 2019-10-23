import React from 'react'
import {connect} from 'react-redux';
import TasksIndex from './tasks_index';
// import { login, clearErrors } from '../../actions/session_actions';
import { fetchTasks, fetchTask, createTask, updateTask, deleteTask } from '../../../actions/tasks_actions';


const MSP = (state, ownProps) => {
    //let tasks = Object.values(state.entities.tasks);
    // let tasks;
    // console.log(ownProps)
    let tasks = ownProps.parentID?
    tasks = Object.values(state.entities.tasks).filter(task => task.parent_id === ownProps.parentID)
    :
    tasks = Object.values(state.entities.tasks).filter(task => task.parent_id === null);
        

    // let tasks = this.state.selectedTasks.filter(tsk => task.id !== tsk.id);
    //console.log(tasks);
    return (
        {
            tasks,
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

