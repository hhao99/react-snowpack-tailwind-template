import React,{ useContext } from 'react'
import { TodosContext } from './TodoContext'
export default ({todo,index})=> {
    
    const { dispatch } = useContext(TodosContext)

    const handleDelete = (index)=> {
        console.log(dispatch)
        dispatch({type:'DELETE', payload: index})
    }
    return (
        <div id='todo' className='px-4'>
            <span className='p-4'>
                <input type='radio'></input>
            </span>
            <span className="mx-auto text-2xl">
                {todo.task}
            </span>
            <span className='p-2 text-red-500'>
                <button onClick={ e=> handleDelete(index)}>X</button>
            </span>
        </div>
    )
}