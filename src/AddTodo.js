import React, { Component } from 'react';

class AddTodo extends Component{
    state ={
        content:'',
        id:1
    }
    handleChange = (e) => {    
        this.setState({
            content:e.target.value
        })
    }
    handleClick = (e) =>{
        //console.log(this.state);
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
        
    }
    render() {
        return(
            <div className="collection-item">
                <div className="row valign-wrapper">
                    <div className="col s12">
                        <form onSubmit={this.handleClick}>
                            <input placeholder="Write Here Bitch!" type="text" className="validate" onChange={this.handleChange} value={this.state.content}/>
                        </form> 
                    </div>
                    <div className="col s12"><a className="btn-floating btn-small waves-effect waves-light red darken-1 right" onClick={this.handleClick}><i className="material-icons">add</i></a></div>
                </div>
            </div>
        )
    }
}


export default AddTodo;