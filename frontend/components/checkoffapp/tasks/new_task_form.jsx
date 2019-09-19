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
        this.state = {
            newTask: "",
        }
    }

    componentDidMount(){
        
    }

    handleSubmit(){

    }
    
    render(){
    
        const display = (
            <div className="tasks">
                <div className="task-input-container">
                    <input className="task-input" type="text" placeholder="Add a task..." value={this.state.newTask} onChange={this.fieldChange}/>
                </div>

                <div className="add-task-actions">
                    <div className="add-task-optional-tags-container">
                        <i className="fa fa-calendar-check-o"></i>
                        <i className="fa fa-calendar-plus-o"></i>
                        <i className="fa fa-exclamation"></i>
                        <i className="fa fa-list-alt"></i>
                        <i className="fa fa-refresh"></i>
                        <i className="fa fa-map-marker"></i>
                        <i className="fa fa-clock-o"></i>
                        <i className="fa fa-user"></i> 
                    </div>

                    <div className="add-task-button-container">
                        <button onClick={()=>this.handleSubmit}>Add Task</button>
                    </div>
                </div>
            </div>
        );
    
        return (
    
        <main className="task-form-component-container">
            {display}
        </main>
        );
    }
    }
    
    export default NewTaskForm;