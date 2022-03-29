import { useReducer } from "react"

const initialState = { count: 0 }

function reducer(state = initialState, action) {

    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':  
            return {count: state.count - 1}
        default:
            return state
    }
}



const CounterReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
                <h1>Count: { state.count }</h1>
                <button onClick={ ()=> dispatch({ type: 'increment' }) } className="btn btn-success">+1</button>
                <button onClick={ ()=> dispatch({ type: 'decrement' }) } className="btn btn-danger mx-2">-1</button>
            </div>
        </div>
    )
}

export default CounterReducer