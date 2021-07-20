import React, { useContext } from 'react'
import Todo from './Todo'
import { TodosContext } from './TodoContext'

export default ({list,dispatch})=> {
    const {state} = useContext(TodosContext)
    return (
        <div className=''>
            {
                state.list.length === 0 ? <h3>No tasks!</h3> :
                state.list.map( (todo,index)=> <Todo key={index} todo={todo} index={index} />)
            }
        </div>
    )
}