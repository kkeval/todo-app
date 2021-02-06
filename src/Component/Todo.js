import React from 'react';
import StackGrid from "react-stack-grid";


const Todo = ({ todos, deleteTodo }) => {           
    const todoList = todos.length ? (
        todos.map(todo => {
            return (                    
                <div key={todo.id} className="template"  >
                    <div className="content-div left-align">                        
                        {todo.content}                                        
                    </div>
                    <div className="row btn-div">
                        <div className="row">
                        <div className="col s1"></div>                        
                        <div className="col s1"></div>
                        <div className="col s1"></div>
                        <div className="col s1"></div>
                        <div className="col s1"></div>
                        <div className="col s1"></div>
                        <div className="col s1"></div>
                        <div className="col s1"></div>
                        <div className="col s1">
                            <a href="#"className="btn-floating waves-effect waves-light btn-small red">
                                <i className="material-icons">mode_edit</i>
                            </a> 
                        </div>                        
                        <div className="col s1"></div>
                        <div className="col s1">                            
                        </div>
                        <div className="col s1">
                            <a href="#" className="btn-floating btn-small waves-effect waves-light red right" onClick={()=> {deleteTodo(todo.id)}}>
                                 <i className="material-icons">delete</i>
                            </a> 
                        </div>
                    </div>    
                    </div>                                 
                </div>              
            )
        })
    ) : (<p className="center grey-text darken-4">None Todo's</p>) 
  
    return (
        <div className="templatecontainer ">             
             <StackGrid
                columnWidth={300}
                duration={200}
                gutterWidth={20}
                gutterHeight={20}                                       
            >
                {todoList}          
            </StackGrid>
            
        </div>                     
    )
}




export default Todo;