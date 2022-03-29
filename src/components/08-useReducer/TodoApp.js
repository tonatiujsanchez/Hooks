
import { useEffect, useReducer } from 'react'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import todoReducer from './todoReducer'

import './todos.css'



const init = () => {

    if (localStorage.getItem('todos-react-reducer')) {
        return JSON.parse(localStorage.getItem('todos-react-reducer'))
    } else {
        return []
    }
}


const TodoApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos-react-reducer', JSON.stringify(todos))
    }, [todos])


    const handleDelete = (todoId) => {
        dispatch({
            type: 'delete',
            paylod: todoId
        })
    }

    const handleToggle = ( todoId ) =>{
        dispatch({
            type: 'toggle',
            paylod: todoId
        })
    }

    const handleAddTodo = ( newTodo ) =>{
        dispatch({
            type: 'add',
            paylod: newTodo
        })
    }

    return (
        <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
                <TodoHeader todos={ todos } handleAddTodo={ handleAddTodo } />
                <hr />

                <TodoList 
                    todos={ todos } 
                    handleToggle={ handleToggle } 
                    handleDelete={ handleDelete } />
            </div>
        </div>

    )
}

export default TodoApp