import { Link } from "react-router-dom"
import Auth from "./authBottun"

function Nav() {
    return(
        <div className="nav">
            <h1>Rotas no React</h1>
            <ul>
                <Auth/>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/aulas">Aulas</Link></li>
            </ul>
        </div>
    )
}

export default Nav