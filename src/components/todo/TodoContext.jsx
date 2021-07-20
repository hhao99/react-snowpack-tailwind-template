import React, {createContext, useReducer} from 'react'

export const TodosContext = createContext()

const TodoStore =  (props)=> {
    
    const initialState = {
        list: [ {id: 0, task: 'initial task',done: false}]
    }
    const reducer = (state,action) => {
        switch(action.type) {
            case 'ADD': {
                const newTask = {
                    id: state.list.lenght,
                    task: action.payload,
                    done: false
                }
            return {list: [...state.list,newTask]}
            }
            case 'DELETE': {
                return { list: state.list.filter( (task,index) => index!== action.payload) }            }
        }
    }
    
    const [state, dispatch] = useReducer(reducer,initialState)

    return (
        <TodosContext.Provider value={{state, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodoStore