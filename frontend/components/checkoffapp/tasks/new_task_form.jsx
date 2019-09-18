import React from "react";
// import { Route } from 'react-router-dom';
// import LoginFormContainer from './login_signup_form/login_form_container';
// import SignupFormContainer from './login_signup_form/signup_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import BannerContainer from '../banner/banner_container';
// import Tasks from './tasks/tasks';
// import NewTaskForm from './tasks_index_item';



class NewTaskForm extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        
    }
    
    render(){
    
        const display = (
            <div className="tasks">
                {/* <ul>
                    {this.props.tasks.map(task => (<li key={task.id}><TasksIndexItem task={task}/></li>))}
                </ul> */}
                <h1>New Task Form Goes Here</h1>
            </div>
        );
    
        return (
    
        <main>
            {display}
        </main>
        );
    }
    }
    
    export default NewTaskForm;