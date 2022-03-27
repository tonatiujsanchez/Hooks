import { useCallback, useEffect, useState } from "react"
import ShowIncrement from "./ShowIncrement"



const CallbackHook = () => {

    const [ counter, setCounter ] = useState(10)

    // const increment = (factor) =>{
    //     setCounter( counter + factor )
    // }


    const increment = useCallback(( factor )=>{
        setCounter(  c => c + factor )
    },[ setCounter ])


    useEffect(() => {
      
        console.log('Hola desde useEffect');
    
    }, [increment])
    


  return (
    <div className="row">
        <div className="col-md-10 col-lg-8 mx-autp">
            <h1>UseCallback: { counter }</h1>
            <hr/>
            <ShowIncrement increment={ increment } />
        </div>
    </div>
  )
}

export default CallbackHook