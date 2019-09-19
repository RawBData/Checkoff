import React from "react";

// import TasksIndexItem from './tasks_index_item';
// import NewTaskForm from './tasks_index_item';



class MenuItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menuSelected:true,
        }

        this.openMenuDetailToggle = this.openMenuDetailToggle.bind(this);
    }

    componentDidMount(){
        
    }

    openMenuDetailToggle(headingSwitch){
        console.log(this.state.menuSelected)
        
        this.setState({
            [headingSwitch]:!this.state[headingSwitch]
        })
    }
    
    render(){

        let carrotClass;
        let headingListShowToggleClass;
        if (this.state.menuSelected){
            carrotClass = "fa fa-caret-down menu-carrot all-tasks-carrot";
            headingListShowToggleClass = "heading-list";
        }else{
            carrotClass = "fa fa-caret-right menu-carrot all-tasks-carrot"
            headingListShowToggleClass = "hide-heading-list";
        }
        
            

    
        const display = (
            <div className="menu-item-display">

                    <div className="menu-item-container" onClick={()=>this.openMenuDetailToggle("menuSelected")}>
                        <div className="heading all-tasks">
                            <i className={carrotClass}></i>
                            <h1 className="heading-title">{this.props.headingTitle}</h1>
                        </div>
                        <div className={headingListShowToggleClass}>
                            <h1 className="heading-title">Inbox</h1>
                            <h1 className="heading-title">All Tasks</h1>
                            <h1 className="heading-title">Today</h1>
                            <h1 className="heading-title">Tomorrow</h1>
                            <h1 className="heading-title">This Week</h1>
                            <h1 className="heading-title">Given to Others</h1>
                            <h1 className="heading-title">Trash</h1>
                        </div>
                    </div>
                
            </div>
        );
    
        return (
    
        <main className="menu-main">
            {display}
        </main>
        );
    }
    }
    
    export default MenuItem;