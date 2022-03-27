
const Header = ({ increment, decrement, counter }) => {
    return (
        <header className="d-flex flex-column flex-md-row justify-content-center align-content-center gap-lg-2">
            <button onClick={decrement} className="btn text-uppercase order-2 order-md-1" disabled={counter === 1}>👈 Previus</button>
            <h1 className="text-center fw-bold order-1 order-md-2"> The <span className="text-success">Breaking Bad</span> Quotes</h1>
            <button onClick={increment} className="btn text-uppercase order-3 ">Next 👉</button>
        </header>
    )
}

export default Header