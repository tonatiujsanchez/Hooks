import { useRef } from "react"


const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        // document.querySelector('input').focus()
        // document.querySelector('input').select()
        inputRef.current.select()
        
        console.log( inputRef.current );
    }

  return (
    <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
            <h1>Hola mundo</h1>
            <hr/>
            <form>
                <div className="mb-3">
                    <input
                        ref={ inputRef } 
                        type="text"
                        className="form-control"
                        placeholder="Nombre" />
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-primary"
                           onClick={ handleClick } >
                        Focus
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FocusScreen