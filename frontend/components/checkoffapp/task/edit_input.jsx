import React from "react";




class ListShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }

    }

    componentDidMount(){
        
    }

    
    render(){

    
        const display = (
            <div className="list-details-container">
                <input  className="task-show-input" onKeyPress={this.props.keyPressed} type="text" value={this.state.selectedSubTasks[0]? this.state.selectedSubTasks[0].title : this.props.task.title} onChange={this.upd('title')}/>
                <i onClick={()=>this.deleteSelectedTasksArray()} className="fa fa-trash print-icon"></i>
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