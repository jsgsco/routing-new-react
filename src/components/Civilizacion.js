import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Civilizacion = () => {

    const { id } = useParams()
    const [civilizacion, setCivilizacion] = useState(undefined)
    
    useEffect(() => {
        (async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const response = await data.json()
            setCivilizacion(response);
        })()
    }, [id])

    console.log(civilizacion);

    if(!civilizacion) return null
    
    return ( 
        <div className="mt-4">
            <h3>{civilizacion.name}</h3>
            <p>Expansion: {civilizacion.expansion}</p>
            <p>Ejercito: {civilizacion.army_type}</p>
            <p>Bonus de Equipo: {civilizacion.team_bonus}</p>
            <Link to='/civilizaciones' className="btn btn-dark">Volver</Link>
        </div>
     );
}
 
export default Civilizacion;