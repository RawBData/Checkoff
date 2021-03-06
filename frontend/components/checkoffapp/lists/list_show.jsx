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


        
        let allTasks, incompleteTasks, completedTasks, numCompletedTasks, listTitle, numTasks;

        if(this.props.listID){
            allTasks = this.props.tasks.filter(tsk => {return tsk.list_id === this.props.listID})
            listTitle = this.props.listName;
        }else{
            allTasks = this.props.tasks.filter(tsk => {return tsk.parent_id === null})  
            listTitle = "All Tasks";   
        }

        numTasks = allTasks.length;
        incompleteTasks = allTasks.filter(tsk => {return !tsk.complete}).length;
        completedTasks = numTasks - incompleteTasks; 
    
        const display = (



            <div className="list-details-container">
                <div className="list-details">
                    <h1>{listTitle}</h1>
                </div>

                <div className="list-completion-container">
                    <div className="num-tasks-container completion-container">
                        <h1>{numTasks}</h1>
                        <p>tasks</p>
                    </div>
                    <div className="num-completed-container completion-container">
                        <h1>{completedTasks}</h1>
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