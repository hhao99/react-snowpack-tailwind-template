import React, { useState } from 'react'

import TodoList from './TodoList'
import AddTodo from './AddTodo'

export default ()=> {
    const initialTaskList = [
        {
            id: 0, task: 'add tailwindcss', done: true
        },
        {
            id: 1, task: 'add todo page', done: true
        }
    ]

    const [taskList,setTaskList] = useState(initialTaskList)

    const handleAddTask = (task) => {
        const newTask = {
            id: taskList.length,
            task,
            done: false
        }
        setTaskList([...taskList,newTask])
    }
    const handleDeleteTask = (index) => {
        setTaskList(taskList.filter( (t,i) => i !== index ))
    }
    return (
        <div id='todo'>
            <h3>Task Manager</h3>
            <AddTodo onAdd={handleAddTask}/>
            <TodoList list={taskList} 
                onDelete={handleDeleteTask}
            />
        </div>
    )
}