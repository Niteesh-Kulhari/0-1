import React from 'react';


export  function Todo({todo}){
    return(
        <div>
            <h1>{todo.title}</h1>
            <h4>{todo.description}</h4>
        </div>
    )
}