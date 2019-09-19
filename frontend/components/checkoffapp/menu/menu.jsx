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

                <MenuItem headingTitle="All Tasks" listItems={["Inbox","Today","Tomorrow","This","Given","Trash"]}/>
                <hr/>
                <MenuItem headingTitle="Lists" listItems={[]}/>
                <hr/>
                <MenuItem headingTitle="Smart Lists" listItems={[]}/>
                <hr/>
                <MenuItem headingTitle="Contacts" listItems={[]}/>
                <hr/>
                <MenuItem headingTitle="Tags" listItems={[]}/>
                <hr/>
                <MenuItem headingTitle="Locations" listItems={[]}/>
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