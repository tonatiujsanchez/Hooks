import { useEffect, useState } from "react"
import Messaje from "./Messaje"



const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    useEffect(() => {
      
    },[])

    
    useEffect(()=>{
       
    }, [ formState ])


    useEffect(()=>{
       
    }, [ email ])
    

    const handleInputChange = ( e ) => {

        const name = e.target.name 
        const value = e.target.value 

        setFormState({
            ...formState,
            [name] : value
        })
    }

    return (
        <div className="row">
            <div className="col-12 col-lg-6 mx-auto">
                <h1 className="text-center">useEffect</h1>
                <hr />
                <form className="mx-auto mt-5">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Introduce active para ver que suceda"
                            autoComplete="off"
                            value={ name }
                            onChange={ handleInputChange } />

                        <div id="emailHelp" className="form-text">{ JSON.stringify( formState ) }</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="ejemplo@email.com"
                            autoComplete="off"
                            value={ email }
                            onChange={ handleInputChange } />
                    </div>
                </form>
                
                { name === 'active' && <Messaje /> }
            </div>
        </div>
    )
}

export default SimpleForm