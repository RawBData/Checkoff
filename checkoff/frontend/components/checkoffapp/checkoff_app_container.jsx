import React from 'react'
import {connect} from 'react-redux';
import Checkoffapp from './checkoffapp';
import { fetchTasks, fetchTask, createTask, updateTask, deleteTask } from '../../actions/tasks_actions';
import { fetchLists, fetchList, createList, updateList, deleteList } from '../../actions/lists_actions';

const MSP = (state, ownProps) => {
    let tasks = Object.values(state.entities.tasks);
    let lists = Object.values(state.entities.lists);
    return (
        {
            tasks,
            lists,
            tasksErrors: state.errors.tasks,
            listsErrors: state.errors.lists
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
            deleteTask: (id)=> dispatch(deleteTask(id)),
            fetchLists: ()=> dispatch(fetchLists()), 
            fetchList: (id)=>dispatch(fetchList(id)), 
            createList: (list)=> dispatch(createList(list)), 
            updateList: (list)=> dispatch(updateList(list)), 
            deleteList: (id)=> dispatch(deleteList(id))
        }

    )
}

export default connect(MSP, MDP)(Checkoffapp)


//currentUser: state.entities.users[state.session.id],