
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]


const todoReducer = ( state = initialState, action ) =>{

    if( action?.type === 'AGREGAR' ){
        return [ ...state, action.payload ]
    }

    return state
}



let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'Comprar cereal',
    done: false
}

const addTodoAction = {
    type: 'AGREGAR',
    payload: newTodo
}

todos = todoReducer( todos, addTodoAction )



console.log( todos )