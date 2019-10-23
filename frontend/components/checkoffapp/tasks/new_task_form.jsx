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
            newTask: {
                title: ""
            },
            inputText:'',
            newTaskFocus: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.newTaskFocusToggle = this.newTaskFocusToggle.bind(this); 
        this.keyPressed = this.keyPressed.bind(this);
    }

    componentDidMount(){
        
    }

    newTaskFocusToggle(){
        setTimeout(()=>{this.setState({
            newTaskFocus: !this.state.newTaskFocus,
        })},500)
        
    }

    handleSubmit(){
        // console.log(this.props.parentID)
        let newTask;
        if(this.props.subtask){
            newTask = this.state.newTask;
            newTask.parent_id = this.props.parentID;
            this.props.createTask(newTask);

            // console.log(newTask)
        }else{
            newTask = this.state.newTask;
            this.props.createTask(newTask);
        }
        this.setState({
            newTask: {
                title: ""
            },
        })
    }

    upd(field){
        return e => {
          this.setState({
              newTask:{
                  [field]:e.target.value
              }

          })
        }
    }

    keyPressed(event) {
        console.log(event.key)
        if (event.key === "Enter") {
            console.log(event)
          this.handleSubmit()
        }
    }
    
    render(){
        // console.log(this.props)
        let placeHolderText;
        let buttonText;
        if (this.props.subtask){
            placeHolderText = "Add a sub-task...";
            buttonText = "Add Sub Task"
        }else{
            placeHolderText = "Add a task...";
            buttonText = "Add Task"
        }

        let optionalTagsClass = this.state.newTaskFocus? "add-task-actions" : "hide-add-task-actions";
        let disableButton= this.state.newTask.title.length < 1? true : false;
    
        const display = (
            <div className="tasks">
                <div onFocus={this.newTaskFocusToggle} onBlur={this.newTaskFocusToggle} className="task-input-container">
                    <input  className="task-input" onKeyPress={this.keyPressed} type="text" placeholder={placeHolderText} value={this.state.newTask.title} onChange={this.upd('title')}/>
                </div>

                <div className={optionalTagsClass}>
                    <div className="add-task-optional-tags-container">
                        <i className="fa fa-calendar-check-o tags-icons"></i>
                        <i className="fa fa-calendar-plus-o tags-icons"></i>
                        <i className="fa fa-exclamation tags-icons"></i>
                        <i className="fa fa-list-alt tags-icons"></i>
                        <i className="fa fa-refresh tags-icons"></i>
                        <i className="fa fa-map-marker tags-icons"></i>
                        <i className="fa fa-clock-o tags-icons"></i>
                        <i className="fa fa-user tags-icons"></i> 
                    </div>

                    <div className="add-task-button-container">
                        <button onClick={()=>this.handleSubmit()} disabled={disableButton} >{buttonText}</button>
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