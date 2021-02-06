import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: '',
        id: 1
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value

        })

    }
    handleClick = (e) => {
        //console.log(this.state);
        e.preventDefault();

        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    
    render() {
        return (          
            <div className="center-align addtext">               
                <div className="row">
                    <div className="col s6">
                        <form onSubmit={this.handleClick}>
                            <textarea  placeholder="Write Here Bitch!" name="" id="" cols="600" rows="500"  onChange={this.handleChange} value={this.state.content} ></textarea>
                            {/* <input type="text" placeholder="Write Here Bitch!" onChange={this.handleChange} value={this.state.content} /> */}
                        </form>
                    </div>
                    <div className="col s6 left">
                        <a href="#"className="btn-floating btn-large waves-effect waves-light red darken-1 left" onClick={this.handleClick}>
                            <i className="material-icons">add</i>
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}


export default AddTodo;