import { useContext } from "react"
import { UserContext } from "./UserContex"


const LoginScreen = () => {
    
    const { setUser } = useContext(UserContext);
    
    const user = {
        id: 123,
        name: 'Brandon',
        email: 'brandon@gmail.com'
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <div>
                <button
                    onClick={ ()=> setUser( user ) } 
                    className="btn btn-primary">
                        Login
                </button>
            </div>
        </div>
    )
}

export default LoginScreen