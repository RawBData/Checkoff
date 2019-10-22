import React from "react";
// import { Route } from 'react-router-dom';
// import LoginFormContainer from './login_signup_form/login_form_container';
// import SignupFormContainer from './login_signup_form/signup_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import BannerContainer from '../banner/banner_container';
// import Tasks from './tasks/tasks';
import TasksIndexItem from '../tasks_index_item';


import newNoteForm from '../new_task_form';
import NoteIndexItem from './note_index_item';

import TasksIndexContainer from '../tasks_index_container';



class Notes extends React.Component {
    constructor(props){
        super(props)
        this.state={
            newNote:'',
            newNoteFocus:false,
            notes: []
        }

        this.newNoteFocusToggle = this.newNoteFocusToggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.keyPressed = this.keyPressed.bind(this);   
    }

    componentDidMount(){
        
    }
    
    newNoteFocusToggle(){
        setTimeout(()=>{this.setState({
            newNoteFocus: !this.state.newNoteFocus,
        })},500)
        
    }

    saveNote(){
        this.props.updateTask(task)
    }

    handleSubmit(){
        
        this.props.updateTask({note:this.state.newNote, type:"notes"})

        this.setState({
            newNote: "",
            newNoteFocus: false,
            notes: this.props.notes
        })
    }

    upd(field){
        return e => {
          this.setState({
            [field]:e.target.value
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
                // let placeHolderText;
                // let buttonText;
                // if (this.props.subtask){
                //     placeHolderText = "Add a sub-task...";
                //     buttonText = "Add Sub Task"
                // }else{
                //     placeHolderText = "Add a task...";
                //     buttonText = "Add Task"
                // }
        
                // let optionalTagsClass = this.state.newNoteFocus? "add-task-actions" : "hide-add-task-actions";
                let disableButton= this.state.newNote.length < 1? true : false;
            
        // console.log(this.props)

        console.log(this.props)
        const display = 
        (
            <div className="notes-container">
                {/* New Note Input */}
                <div onFocus={this.newNoteFocusToggle} onBlur={this.newNoteFocusToggle} className="note-input-container">
                    <input  className="note-input" onKeyPress={this.keyPressed} type="text" placeholder="Add a note" value={this.state.newNote} onChange={this.upd('newNote')}/>
                    <div className="note-form-buttons-container">
                        <div className="note-button-container note-save">
                            <button onClick={()=>this.handleSubmit()} disabled={disableButton} >Save</button>
                        </div>
                        <div className="note-button-container note-cancel">
                            <button onClick={()=>this.handleCancel()}>Cancel</button>
                        </div>
                    </div>
                </div>
                
                {/* notes display */}
                <div className="notes-display">
                    { this.props.notes? this.props.notes.map(note => (<NoteIndexItem note={note} key={note+Math.random()}/> )) : (<div></div>) }
                </div>
            </div>
        )
        
    
        return (
    
        <main className="notes-show-container">
            {display}    
        </main>
        );
    }
    }
    
    export default Notes;