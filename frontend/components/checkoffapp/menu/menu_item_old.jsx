import React from "react";

// import TasksIndexItem from './tasks_index_item';
// import NewTaskForm from './tasks_index_item';



class MenuItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menuSelected:false,
        }

        this.openMenuDetailToggle = this.openMenuDetailToggle.bind(this);
    }

    componentDidMount(){
        
    }

    openMenuDetailToggle(headingSwitch){
        
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
        
        
        let listItemArray = this.props.listItems.length > 0?
        (this.props.listItems.map(listItem => (<li key={listItem}><h1 className="heading-title">{listItem}</h1></li>)))
        :
        (<li></li>);

        const display = this.props.headingTitle === "All Tasks"?
        (
            <div className="menu-item-display">

                    <div className="menu-item-container" onClick={()=>this.openMenuDetailToggle("menuSelected")}>
                        <div className="heading all-tasks">
                            <i className={carrotClass}></i>
                            <h1 className="heading-title">{this.props.headingTitle}</h1>
                        </div>
                        <div className={headingListShowToggleClass}>
                            <ul className="menu-item-list-ul">
                                {listItemArray}
                            </ul>
                        </div>
                    </div>
                
            </div>
        )
        :
        (
            <div className="menu-item-display">

                    <div className="menu-item-container" onClick={()=>this.openMenuDetailToggle("menuSelected")}>
                        <div className="heading all-tasks">
                            <i className={carrotClass}></i>
                            <h1 className="heading-title">{this.props.headingTitle}</h1>
                        </div>
                        <div className={headingListShowToggleClass}>
                            <ul className="menu-item-list-ul">
                                {listItemArray}
                            </ul>
                        </div>
                    </div>
            </div>
        )
        
    
        return (
    
        <main className="menu-main">
            {display}
        </main>
        );
    }
    }
    
    export default MenuItem;

