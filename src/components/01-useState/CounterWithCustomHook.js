import useCounter from "../../hooks/useCounter"


const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(100)

    return (
        <>
            <h1>Counter with hook: { counter }</h1>
            <hr />
            <button onClick={ increment } className="btn btn-success mx-2">+1</button>
            <button onClick={ reset } className="btn btn-warning mx-2 text-uppercase">Reset</button>
            <button onClick={ decrement } className="btn btn-danger">-1</button>
        </>
    )
}

export default CounterWithCustomHook