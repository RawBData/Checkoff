import React from "react";
// import { Route } from 'react-router-dom';
// import LoginFormContainer from './login_signup_form/login_form_container';
// import SignupFormContainer from './login_signup_form/signup_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BannerContainer from '../banner/banner_container';
import TasksIndex from './tasks/tasks_index';



    class CheckoffApp extends React.Component {
        constructor(props){
          super(props)
        }

        componentDidMount(){
          this.props.fetchTasks();
        }
      
        render(){
          const currentUser = this.props.currentUser;
      
          const display = (
              <div className="main-app">
                <BannerContainer className="main-banner"/>
                <div className="main-body">
                  <div className="main-left-content-bar">
                      <h1>place for content-navigator</h1>
                  </div>

                  <div className="main-tasks-index">
                    <TasksIndex  tasks={this.props.tasks}
                            fetchTask={this.props.fetchTask} 
                            deleteTask={this.props.deleteTask} 
                            createTask={this.props.createTask}
                            updateTask={this.props.updateTask}
                    />
                  </div>

                  <div className="main-list-details">
                      <h1>place for list details</h1>
                  </div>

                  <div className="main-task-show">
                      <h1>place for task show</h1>
                  </div>
                </div>
              </div>
          );
      
          return (
      
            <main>
             {display}
            </main>
          );
        }
      }
      
      export default CheckoffApp;