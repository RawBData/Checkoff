import React from 'react'
import {connect} from 'react-redux';
import Checkoffapp from './checkoffapp';
import { fetchTasks, fetchTask, createTask, updateTask, deleteTask } from '../../actions/tasks_actions';

const MSP = (state, ownProps) => {
    let tasks = Object.values(state.entities.tasks);
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
            updateTask: (task)=> dispatch(updateTask(task)), 
            deleteTask: (id)=> dispatch(deleteTask(id))
        }

    )
}

export default connect(MSP, MDP)(Checkoffapp)


//currentUser: state.entities.users[state.session.id],