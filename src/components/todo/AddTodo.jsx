import React , {useState } from 'react'

export default ({onAdd})=> {
    const [task,setTask] = useState('')
    
    const handleKeyDown = (e) => {
        if(e.key === "Enter") {
            onAdd(task)
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