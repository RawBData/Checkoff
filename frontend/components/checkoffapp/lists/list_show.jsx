import React from "react";
// import { Route } from 'react-router-dom';
// import LoginFormContainer from './login_signup_form/login_form_container';
// import SignupFormContainer from './login_signup_form/signup_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import BannerContainer from '../banner/banner_container';
// import Tasks from './tasks/tasks';
// import ListShow from './tasks_index_item';



class ListShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }

    }

    componentDidMount(){
        
    }

    
    render(){

        let allTasks = this.props.tasks.filter(tsk => {return tsk.parent_id === null})
        let incompleteTasks = allTasks.filter(tsk => {return !tsk.complete});
        let completedTasks = this.props.tasks.filter(tsk => {return tsk.complete});
        
        console.log("alltasks",allTasks,"incomplete",incompleteTasks,"complete",completedTasks)
        let numTasks = allTasks.length;
        let numCompletedTasks = completedTasks.length;
    
        const display = (



            <div className="list-details-container">
                <div className="list-details">
                    <h1>{this.props.listName}</h1>
                    <i className="fa fa-rss list-icons"></i>
                    <i className="fa fa-calendar list-icons cal-icon"></i>
                </div>

                <div className="list-completion-container">
                    <div className="num-tasks-container completion-container">
                        <h1>{numTasks}</h1>
                        <p>tasks</p>
                    </div>
                    <div className="num-completed-container completion-container">
                        <h1>{numCompletedTasks}</h1>
                        <p>completed</p>
                    </div>
                </div>

            </div>
        );
    
        return (
    
        <main className="list-detail-component-container">
            {display}
        </main>
        );
    }
    }
    
    export default ListShow;