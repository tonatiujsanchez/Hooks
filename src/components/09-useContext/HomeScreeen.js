import { useContext } from "react"
import { UserContext } from "./UserContex"


const HomeScreeen = () => {

  const { user } = useContext( UserContext )

  return (
    <div>
        <h1>HomeScreeen</h1>
        <hr/>
        <pre>{ JSON.stringify( user, null, 4 ) }</pre>
    </div>
  )
}

export default HomeScreeen