import useCounter from "../../hooks/useCounter"
import useFetch from "../../hooks/useFetch"


import Header from "./Header"
import Quote from "./Quote"
import Loading from "./Loading"


const MultipleCustomHooks = () => {
    
    const { counter, increment, decrement } = useCounter(1)
    const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)

    const { author, quote } = !!data && data[0]
    // const {author, quote} = data ? data[0]: {}


    return (

        <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
                <Header increment={ increment } decrement={ decrement } counter={ counter } />
                <hr />
                {loading
                    ? <Loading />
                    : <Quote author={ author } quote={ quote } />
                }
            </div>

        </div>
    )
}

export default MultipleCustomHooks