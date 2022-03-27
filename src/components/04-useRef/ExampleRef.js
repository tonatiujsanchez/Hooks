import { useState } from "react"
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks"


const ExampleRef = () => {

    const [show, setShow] = useState(false)
    

  return (

    <div>
        <div className="d-flex justify-content-between">
            <h2>Example Ref</h2>
            <button
                    onClick={ ()=> setShow( !show ) } 
                    className="btn btn-secondary">
            Show/Hidden</button>
        </div>
        <hr/>
        { show && <MultipleCustomHooks /> }
        <div className="my-3">

        </div>
    </div>

  )
}

export default ExampleRef