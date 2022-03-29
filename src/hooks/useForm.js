import { useState } from "react"


const useForm = ( initialState = {} ) => {

    const [ values, setvalues ] = useState( initialState )


    const handleInputChange = ( e ) =>{
        const name = e.target.name 
        const value = e.target.value 

        setvalues({
            ...values,
            [name] : value
        })
    }

    const reset = () =>{
        setvalues( initialState )
    }


    return [ values, handleInputChange, reset ]

}

export default useForm