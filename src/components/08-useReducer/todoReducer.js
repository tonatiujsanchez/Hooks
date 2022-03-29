


const todoReducer = ( state = [], action ) =>{

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.paylod ]
    
        case 'delete':
            return state.filter( item => item.id !== action.paylod )

        case 'toggle':
            return state.map( todo => todo.id === action.paylod ? { ...todo, done: !todo.done } : todo )
        
        default:
            return state
    }

}

export default todoReducer