import { useEffect, useState } from "react"


const Messaje = () => {

    const [coors, setcoors] = useState({ x: 0, y: 0 })

    useEffect(() => {

        const mouseMove = ( e ) => {
            const coors = {
                x: e.x,
                y: e.y
            }
            setcoors(coors)
        }

        window.addEventListener('mousemove', mouseMove )

        return () => {
            console.log('Componente Desmontado')
            window.removeEventListener('mousemove', mouseMove)

        }
    }, [])


    return (
        <div>
            <h3>Vamo' a darle</h3>
            <p>{ JSON.stringify( coors ) }</p>
        </div>
    )
}

export default Messaje