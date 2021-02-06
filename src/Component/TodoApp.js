import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';


class TodoApp extends Component {
    state = {       
        todos:[
           
        ]
    }  
    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id   
        });
        this.setState({
            todos:todos
        })
    }
    addTodo = (todo) => {
        todo.id = Math.floor ((Math.random()*100)+1);
        console.log(todo.id);
        let todos = [...this.state.todos,todo]
        this.setState({
            todos
        })
    }
    render(){
        return (

            <div className="Todo-app">
                <h1 className="container center bold black-text todoheading">Todo's</h1>
                <div className="container">
                    <AddTodo addTodo={this.addTodo} />
                </div>
                <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
                
            </div>
        )
    }
}

export default TodoApp
