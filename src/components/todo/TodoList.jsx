import React from 'react'
import Todo from './Todo'
export default ({list,onDelete})=> {
    return (
        <div id='todolist'>
            {
                list.length === 0 ? <h3>No tasks!</h3> :
                list.map( (todo,index)=> <Todo key={index} todo={todo} index={index} onDelete={onDelete}/>)
            }
        </div>
    )
}