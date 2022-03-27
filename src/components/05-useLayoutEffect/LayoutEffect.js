import { useLayoutEffect, useRef, useState } from "react"
import useCounter from "../../hooks/useCounter"
import useFetch from "../../hooks/useFetch"


import Header from "./../03-examples/Header"

// useLayoutEffect
// Funciona igual que el useEffect pero se dispara de forma síncrona después de que todos los elemtos del DOM de renderizaron.


const LayoutEffect = () => {

    const { counter, increment, decrement } = useCounter(1)
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { quote } = !!data && data[0]

    const paragraphTag = useRef()
    const [ paragraphSize, setParagraphSize ] = useState({})

    useLayoutEffect(()=>{
        setParagraphSize( paragraphTag.current.getBoundingClientRect() );
    },[ quote ])

    return (

        <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
                <Header increment={increment} decrement={decrement} counter={counter} />
                <hr />
                <blockquote className="blockquote d-flex">
                    <p ref={ paragraphTag } className="mt-5 mb-4 text-center">{quote}</p>
                </blockquote>
                <div className="my-4">
                    <pre>
                        { JSON.stringify( paragraphSize, null, 4 ) }
                    </pre>
                </div>
            </div>

        </div>
    )
}

export default LayoutEffect