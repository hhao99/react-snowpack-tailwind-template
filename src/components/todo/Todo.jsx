import React from 'react'

export default ({todo,index,onDelete})=> {

    const handleDelete = (index)=> {
        onDelete(index)
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