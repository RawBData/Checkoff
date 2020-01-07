import React from "react";





class Tag extends React.Component {
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
        let tag  = this.props.tag.title? this.props.tag.title : this.props.tag;
        return (
            <div className="t_i_i_tag-container">
                    <p>{tag}</p>
            </div>
        );
    }
    }
    
    export default Tag;