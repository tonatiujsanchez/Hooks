import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light d-flex justify-content-center justify-content-sm-between mb-3 flex-wrap">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">UseContext</NavLink>
        <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link fw-bold" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link fw-bold" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link fw-bold" to="/login">login</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavBar