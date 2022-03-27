import { useState } from "react"


const useForm = ( initialState = {} ) => {

    const [values, setvalues] = useState( initialState )


    const handleInputChange = ( e ) =>{
        const name = e.target.name 
        const value = e.target.value 

        setvalues({
            ...values,
            [name] : value
        })
    }


    return [ values, handleInputChange ]

}

export default useForm