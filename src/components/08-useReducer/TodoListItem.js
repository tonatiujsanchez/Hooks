

import PropTypes from 'prop-types'


const TodoListItem = ({ todo, idx, handleToggle, handleDelete }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <p
                className={`text-center m-0 todo-p ${todo.done ? 'complete' : ''}`}
                onClick={() => handleToggle(todo.id)}>
                {idx + 1}. {todo.desc}
            </p>
            <div>
                <button
                    onClick={() => handleDelete(todo.id)}
                    className='btn btn-danger'>
                    Borrar
                </button>
            </div>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default TodoListItem