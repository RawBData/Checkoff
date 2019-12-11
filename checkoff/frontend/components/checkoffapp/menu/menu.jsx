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

<<<<<<< HEAD
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
=======
                <MenuItem headingTitle="All Tasks" changeListDisplay={this.props.changeListDisplay} listItems={[]}/>
                <hr/>
                <MenuItem headingTitle="Lists" 
                    changeListDisplay={this.props.changeListDisplay} 
                    listItems={this.props.lists}
                    createList={this.props.createList}
                    deleteList={this.props.deleteList}
                />
>>>>>>> 241e2e361686c302b605e8e0484da50fb764acde
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