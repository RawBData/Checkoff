import React from "react";

// import TasksIndexItem from './tasks_index_item';
// import NewTaskForm from './tasks_index_item';



class MenuItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
<<<<<<< HEAD
            menuSelected:true,
        }

        this.openMenuDetailToggle = this.openMenuDetailToggle.bind(this);
=======
            menuSelected:false,
            name:''
        }

        this.openMenuDetailToggle = this.openMenuDetailToggle.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
        this.upd = this.upd.bind(this);
        this.createList = this.createList.bind(this);
        this.deleteList = this.deleteList.bind(this);
>>>>>>> 241e2e361686c302b605e8e0484da50fb764acde
    }

    componentDidMount(){
        
    }

    openMenuDetailToggle(headingSwitch){
        
        this.setState({
            [headingSwitch]:!this.state[headingSwitch]
        })
    }
    
<<<<<<< HEAD
=======
    changeTaskDisplay(list){

    }

    createList(){
        if(this.state.name.length>0){
            this.props.createList({name:this.state.name})
            this.setState({
                name:''
            })
        }
    }

    deleteList(id){
        this.props.changeListDisplay("All Tasks");
        this.props.deleteList(id);
    }

    upd(field){
        return e => {
          this.setState({
                  [field]:e.target.value
          })
        }
    }

    keyPressed(event) {
        // console.log(event.key)
        if (event.key === "Enter") {
            // console.log(event)
          this.createList()
        }
    }


>>>>>>> 241e2e361686c302b605e8e0484da50fb764acde
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
<<<<<<< HEAD
        (this.props.listItems.map(listItem => (<li key={listItem}><h1 className="heading-title">{listItem}</h1></li>)))
=======
        (this.props.listItems.map(listItem => (<li className="menu-list-li" key={listItem.id}>
            <h1 className="list-title" onClick={()=>this.props.changeListDisplay(listItem)}>{listItem.name}</h1>
            <i className="fa fa-trash list-item-delete" value={listItem.id} onClick={()=>this.deleteList(listItem.id)}/>
            </li>)))
>>>>>>> 241e2e361686c302b605e8e0484da50fb764acde
        :
        (<li></li>);

        const display = this.props.headingTitle === "All Tasks"?
        (
<<<<<<< HEAD
            <div className="menu-item-display">

                    <div className="menu-item-container" onClick={()=>this.openMenuDetailToggle("menuSelected")}>
                        <div className="heading all-tasks">
=======
            <div className="menu-item-display" onClick={()=>this.props.changeListDisplay("All Tasks")} >
                    <div className="menu-item-container">
                        <div className="heading all-tasks">
                            <h1 className="heading-title">{this.props.headingTitle}</h1>
                        </div>
                    </div>
                
            </div>
        )
        : this.props.headingTitle === "Lists"?
        (
            <div className="menu-item-display lists">

                    <div className="menu-item-container">
                        <div className="heading"  onClick={()=>this.openMenuDetailToggle("menuSelected")}>
>>>>>>> 241e2e361686c302b605e8e0484da50fb764acde
                            <i className={carrotClass}></i>
                            <h1 className="heading-title">{this.props.headingTitle}</h1>
                        </div>
                        <div className={headingListShowToggleClass}>
<<<<<<< HEAD
=======
                            <div className="new-list-input-container">
                                <input
                                    onKeyPress={this.keyPressed} 
                                    type="text" 
                                    placeholder="Add List" 
                                    value={this.state.name} 
                                    onChange={this.upd('name')}
                                />
                                <div className="new-list-button-container" onClick={this.createList}>
                                    <i className="fa fa-plus"/>
                                </div>
                            </div>
>>>>>>> 241e2e361686c302b605e8e0484da50fb764acde
                            <ul className="menu-item-list-ul">
                                {listItemArray}
                            </ul>
                        </div>
                    </div>
<<<<<<< HEAD
                
=======
>>>>>>> 241e2e361686c302b605e8e0484da50fb764acde
            </div>
        )
        :
        (
            <div className="menu-item-display">

<<<<<<< HEAD
                    <div className="menu-item-container" onClick={()=>this.openMenuDetailToggle("menuSelected")}>
                        <div className="heading all-tasks">
=======
                    <div className="menu-item-container">
                        <div className="heading"  onClick={()=>this.openMenuDetailToggle("menuSelected")}>
>>>>>>> 241e2e361686c302b605e8e0484da50fb764acde
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

