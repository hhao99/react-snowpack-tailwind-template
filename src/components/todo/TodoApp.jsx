import React from 'react'

import TodoList from './TodoList'
import AddTodo from './AddTodo'
import TodoStore from './TodoContext'

export default ()=> {
    return (
        <div>
            <TodoStore>
                <h2>Task Manager</h2>
                <AddTodo />
                <TodoList />
                <footer>created with useContext and useReducer!</footer>
            </TodoStore>
        </div>
    )
}