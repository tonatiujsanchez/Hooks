import { useState } from "react"


const CounterApp = () => {

    const [ counters, setCounters] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    })

    const { counter1, counter2, counter3, counter4 } = counters

    return (
        <div className="p-5">
            <h2>Counter <span className="text-primary">{counter1}</span></h2>
            <h2>Counter <span className="text-success">{counter2}</span></h2>
            <h2>Counter <span className="text-warning">{counter3}</span></h2>
            <h2>Counter <span className="text-info">{counter4}</span></h2>

            <hr />
            <button className="btn btn-primary mx-2"
                onClick={ () => setCounters({ 
                    ...counters,
                    counter1: counter1 + 1 
                })}
            >+1</button>
            <button className="btn btn-success mx-2"
                onClick={ () => setCounters({ 
                    ...counters,
                    counter2: counter2 + 1 
                })}
            >+1</button>
            <button className="btn btn-warning mx-2"
                onClick={ () => setCounters({ 
                    ...counters,
                    counter3: counter3 + 1 
                })}
            >+1</button>
            <button className="btn btn-info mx-2"
                onClick={ () => setCounters({ 
                    ...counters,
                    counter4: counter4 + 1 
                })}
            >+1</button>
        </div>
    )
}

export default CounterApp