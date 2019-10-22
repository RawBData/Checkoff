import React from "react";





class Notes extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }

    }

    componentDidMount(){
        
    }

    handleEdit(){


    }

    handleDelete(){


    }


    
    render(){

        const display = 
        (
            <div className="task-show">
                <h1>{this.props.note}</h1>
            </div>
        )
        
    
        return (
    
        <main>
            {display}    
        </main>
        );
    }
    }
    
    export default Notes;