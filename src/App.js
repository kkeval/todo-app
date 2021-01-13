import React, { Component } from 'react';
import Todo from './Todo.js';
import AddTodo from './AddTodo.js';


class App extends Component {
    state = {       
        todos:[
            {id:1, content:''}
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
        todo.id = Math.random();
        console.log(todo.id);
        let todos = [...this.state.todos,todo]
        this.setState({
            todos
        })
    }
    render(){
        return(
            <div className="Todo-app container">
                <h1 className="container center indigo-text darken-4">Todo's</h1>  
                <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <AddTodo addTodo={this.addTodo}/>
            </div> 
        )
    }
}

export default App;
