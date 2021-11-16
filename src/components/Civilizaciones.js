import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Civilizaciones = () => {

    const [civilizaciones, setCivilizaciones] = useState([])

    useEffect(() => {
        (async () => {
            const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
            const response = await data.json()
            setCivilizaciones(response.civilizations);
        })()
    }, [])


    return ( 
        <div className="mt-4">
            <h1>Civilizaciones</h1>
            <ul>
                {
                    civilizaciones.map(civilizacion => (
                        <li key={civilizacion.id}>
                            <Link to={`/civilizacion/${civilizacion.id}`}>{civilizacion.name} - {civilizacion.expansion}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default Civilizaciones;