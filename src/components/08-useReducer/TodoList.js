import TodoListItem from "./TodoListItem"

import PropTypes from 'prop-types'


const TodoList = ({ todos, handleToggle, handleDelete  }) => {
    return (
        <ul className='list-group list-group-flush'>
            {todos.map((todo, idx) => (
                <TodoListItem 
                    key={ todo.id } 
                    todo={ todo }
                    idx={ idx } 
                    handleToggle={ handleToggle } 
                    handleDelete={ handleDelete } />
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}

export default TodoList