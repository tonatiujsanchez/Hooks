import { memo } from "react";



const ShowIncrement = memo( ({ increment }) => {


    console.log('Me volví a generar :(');

  return (
    <button onClick={ ()=> increment(5) } className="btn btn-success">
        Incrementar
    </button>
  )
})

export default ShowIncrement