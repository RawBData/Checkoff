import React from "react";
import BannerContainer from '../banner/banner_container';
import Menu from './menu/menu';
import TasksIndex from './tasks/tasks_index';



    class CheckoffApp extends React.Component {
        constructor(props){
          super(props)
          this.state = {
            showMenu: true,
          }

          this.toggleMenu = this.toggleMenu.bind(this);
        }

        componentDidMount(){
          this.props.fetchTasks();
        }

        toggleMenu(){
          this.setState({
            showMenu: !this.state.showMenu
          })
        }
      
        render(){
          const currentUser = this.props.currentUser;

          const ShowMenuToggleClass = this.state.showMenu === true? 
                                    ("main-body body-with-menu") 
                                    : 
                                    ("main-body body-without-menu");
      
          const display = (
              <div className="main-app">
                
                <BannerContainer className="main-banner" toggleMenu={this.toggleMenu}/>
                
                <div className={ShowMenuToggleClass}>

                  <div className={"main-left-content-bar"}>
                      <figure>
                        <img src={window.logoURL_short} alt="logo-dark" className="app-logo"/>
                      </figure>
                      <Menu />
                      <div className="hire-me">
                        <hr/>
                        <h1>Ready to hire me?</h1>
                      </div>
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