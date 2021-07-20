import React , { useContext, useState } from 'react'
import { TodosContext } from './TodoContext'
export default ()=> {
    const [task,setTask] = useState('')
    const { dispatch } = useContext(TodosContext)
    
    const handleKeyDown = (e) => {
        if(e.key === "Enter") {
            dispatch({type:'ADD',payload: task})
            setTask('')
        }
    }
    return (
        <div id='todo'>
            <input type='text' value={task} 
                onChange={e=> setTask(e.target.value)}
                onKeyDown={e=> handleKeyDown(e)} />
        </div>
    )
}