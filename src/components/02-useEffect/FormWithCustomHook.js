
import { useEffect } from "react"
import useForm from "../../hooks/useForm"




const FormWithCustomHook = () => {

    const [ values, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = values

    useEffect(() => {
      console.log('Email cambio', email);
    
    }, [ email ])
    

    const handleSubmit = ( e ) =>{
        e.preventDefault()

        if([name, email, password].includes('')){
            console.log( 'Todos los campos son requeridos' );
            return
        }

        console.log( 'Enviando... ', values );

    }

    return (
        <div className="row">
            <div className="col-12 col-lg-6 mx-auto">
                <h1 className="text-center">FormWithCustomHook</h1>
                <hr />
                <div className="form-text text-center">{ JSON.stringify( values ) }</div>
                <form onSubmit={ handleSubmit } className="mx-auto mt-5">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Tu Nombre"
                            autoComplete="off"
                            value={ name }
                            onChange={ handleInputChange } />

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
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="******"
                            value={ password }
                            onChange={ handleInputChange } />
                    </div>
                    <div className="d-grid gap-2 mt-4">
                        <button type="submit" className="btn btn-primary btn-full">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormWithCustomHook