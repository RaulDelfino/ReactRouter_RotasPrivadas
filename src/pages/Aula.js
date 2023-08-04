import { useParams } from "react-router-dom"
import data from "../data"


function useAula(){
    const id = useParams().id

    return data.filter(aula => aula.id == id)[0]
}//Fazendo Proprio hook
// criar o hook para filtrar as aulas de acordo como id passado na URL


export default function Aula(){

    const aula = useAula()

    return(
        <div className="page">
            <h1>{aula.title}</h1>
            <h3>{aula.desc}</h3>
        </div>
    )
}