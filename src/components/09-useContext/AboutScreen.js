import { useContext } from "react"
import { UserContext } from "./UserContex"


const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />
            <div>
                <pre>
                    { JSON.stringify( user, null, 4 ) }
                </pre>
            </div>
            <div>
                <button
                    onClick={ ()=> setUser({}) } 
                    className="btn btn-danger">
                        Logout
                </button>
            </div>
        </div>
    )
}

export default AboutScreen