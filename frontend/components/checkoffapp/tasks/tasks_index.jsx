import React from "react";
// import { Route } from 'react-router-dom';
// import LoginFormContainer from './login_signup_form/login_form_container';
// import SignupFormContainer from './login_signup_form/signup_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import BannerContainer from '../banner/banner_container';
// import Tasks from './tasks/tasks';
import TasksIndexItem from './tasks_index_item';
import NewTaskForm from './new_task_form';



class TasksIndex extends React.Component {
    constructor(props){
        super(props)
        this.state={
            tasksSelected: false,
        }
    }

    componentDidMount(){
        
    }
    
    render(){

        const actionsRow2Display = this.state.tasksSelected?
        ("task-specific-actions")
        :
        ("hide-task-specific-actions");

            
    
        const display = (
            
            <div className="tasks_index">
                <div className="tasks-index-actions">
                    <div className="actions-row-1">
                        <div className="action-cog-container" onClick={logout}>
                            <i className="fa fa-cog tasks-cog"></i>
                            <i className="fa fa-caret-down tasks-cog-carrot"></i>
                        </div>
                        <h5 className="action-link-complete">complete</h5>
                        <h5 className="action-link-complete">incomplete</h5>
                        <i className="fa fa-print print-icon"></i>
                    </div>
                    <div className="actions-row-2">

                    </div>
                </div>

                <div className="tasks-index-new-task-form-container">
                    <NewTaskForm />
                </div>

                <div className="task-index-tasks">
                    <ul>
                        {this.props.tasks.map(task => (<li key={task.id}><TasksIndexItem task={task}/></li>))}
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