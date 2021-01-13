import React from 'react';

const Todo = ({ todos, deleteTodo }) => { 
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <div className="row valign-wrapper" key={todo.id}>
                        <div className="col s6">
                            <span className="left-align" onClick={()=> {deleteTodo(todo.id)}}>{todo.content}</span>
                        </div>
                        <div className="col s6">
                            <a className="btn-floating btn-small waves-effect waves-light grey darken-1 right" onClick={()=> {deleteTodo(todo.id)}}><i className="material-icons">remove</i></a>
                        </div>
                    </div>
                </div>
            )
        })
    ) : (<p className="center grey-text darken-4">None Todo's</p>) 
  
    return (
          
        <div className="tods collection">
            {todoList}
        </div>
    )
}




export default Todo;