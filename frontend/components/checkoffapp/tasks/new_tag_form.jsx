import React from "react";


class newtagForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
        this.upd = this.upd.bind(this);
    }

    componentDidMount(){
        
    }

    handleSubmit(){
        console.log("submitting new tag")
        this.props.updateTask({type:"tags"},[this.state.title]);


        this.setState({
                title: ""
        })
    }

    upd(){
        console.log("buttons")
        return e => {
            console.log(e.target.value)
          this.setState({
              title: e.target.value
          })
          
        }
    }

    keyPressed(event) {
        if (event.key === "Enter") {
          this.handleSubmit()
        }
    }
    
    render(){
        console.log(this.state)


        let disableButton= this.state.title.length < 1? true : false;
    
        const display = (
            <div className="tags">
                <div className="tag-input-container">
                    <input  className="tag-input" onKeyPress={this.keyPressed} type="text" placeholder="Add tag" value={this.state.title} onChange={this.upd()}/>
                    <div className="add-tag-button-container">
                        <button onClick={()=>this.handleSubmit()} disabled={disableButton}>tag</button>
                    </div>
                </div>

                {/* <div className={optionaltagsClass}>
                    <div className="add-tag-optional-tags-container">
                        <i className="fa fa-calendar-check-o tags-icons"></i>
                        <i className="fa fa-calendar-plus-o tags-icons"></i>
                        <i className="fa fa-exclamation tags-icons"></i>
                        <i className="fa fa-list-alt tags-icons"></i>
                        <i className="fa fa-refresh tags-icons"></i>
                        <i className="fa fa-map-marker tags-icons"></i>
                        <i className="fa fa-clock-o tags-icons"></i>
                        <i className="fa fa-user tags-icons"></i> 
                    </div>

                    
                </div> */}
            </div>
        );
    
        return (
    
        <main className="tag-form-component-container">
            {display}
        </main>
        );
    }
    }
    
    export default newtagForm;