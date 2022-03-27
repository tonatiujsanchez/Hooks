import { useMemo, useState } from "react"
import useCounter from "../../hooks/useCounter"

import heavyProcess from "../../helpers/heavyProcess"

const MemoHook = () => {

    const { counter, increment } = useCounter(2000)
    const [show, setShow] = useState(true)
    
    const memoProcess = useMemo(() => heavyProcess(counter), [counter])

  return (
    <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
            <h1>Memo Hook</h1>
            <h2>Counter <small>{ counter }</small></h2>
            <hr/>
            <p>{ memoProcess }</p>
            <div className="mb-3">
                <button 
                    className="btn btn-primary me-3"
                    onClick={ increment }>
                        Increment
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={ ()=> setShow( !show ) }>
                        Show / Hidde: { JSON.stringify( show ) }
                </button>
            </div>
        </div>
    </div>
  )
}

export default MemoHook