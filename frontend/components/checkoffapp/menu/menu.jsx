import React from "react";
import MenuItem from './menu_item'

// import TasksIndexItem from './tasks_index_item';
// import NewTaskForm from './tasks_index_item';



class Menu extends React.Component {
    constructor(props){
        super(props)

    }

    componentDidMount(){
        
    }
    
    render(){

        
    
        const display = (
            <div className="menu-display">

                <MenuItem headingTitle="All Tasks" changeListDisplay={this.props.changeListDisplay} listItems={[]}/>
                <hr/>
                <MenuItem headingTitle="Lists" 
                    changeListDisplay={this.props.changeListDisplay} 
                    listItems={this.props.lists}
                    createList={this.props.createList}
                    deleteList={this.props.deleteList}
                />
                <hr/>
                
            </div>
        );
    
        return (
    
        <main className="menu-main">
            {display}
        </main>
        );
    }
    }
    
    export default Menu;