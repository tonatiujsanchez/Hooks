import { useState } from "react"
import useCounter from "../../hooks/useCounter"
import Small from "./Small"


const Memorize = () => {

    const { counter, increment } = useCounter(10)
    const [show, setShow] = useState(true)
    

  return (
    <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
            <h1>Counter <Small value={ counter } /></h1>
            <hr/>
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

export default Memorize