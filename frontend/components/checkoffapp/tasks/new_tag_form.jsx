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
        this.props.updateTask({type:"tags"},[this.state.title]);
        this.setState({
                title: ""
        })
    }

    upd(){
        return e => {
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
        let disableButton= this.state.title.length < 1? true : false;
    
        const display = (
            <div className="tags">
                <div className="tag-input-container">
                    <input  className="tag-input" onKeyPress={this.keyPressed} type="text" placeholder="Add tag" value={this.state.title} onChange={this.upd()}/>
                    <div className="add-tag-button-container">
                        <button onClick={()=>this.handleSubmit()} disabled={disableButton}>tag</button>
                    </div>
                </div>
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