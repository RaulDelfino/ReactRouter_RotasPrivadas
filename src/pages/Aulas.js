import { Link } from "react-router-dom"
import data from "../data"


function Aulas() {

    return(
        <div>
            <h1>Pagina de Aulas</h1>
            <ul className="aulas">
                {data.map(aula => 
                    <li key={aula.id}><Link className="link" to={`${aula.id}`}>{aula.title}</Link></li>
                    )}
            </ul>
        </div>
    )
}
export default Aulas