import React from "react";
// import { Route } from 'react-router-dom';
// import LoginFormContainer from './login_signup_form/login_form_container';
// import SignupFormContainer from './login_signup_form/signup_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import BannerContainer from '../banner/banner_container';
// import Tasks from './tasks/tasks';
import TasksIndexItem from './tasks_index_item';
import NewTaskForm from './tasks_index_item';



class TasksIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        
    }
    
    render(){

            
        const tasks_index_buttons = (<div></div>);
    
        const display = (
            <div className="tasks_index">
                {/* <hr/> */}

                <ul>
                    {this.props.tasks.map(task => (<li key={task.id}><TasksIndexItem task={task}/></li>))}
                </ul>
                
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