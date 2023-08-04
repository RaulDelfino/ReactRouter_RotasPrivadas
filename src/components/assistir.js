import { useLocation } from "react-router-dom"

function useQuery(){
    return new URLSearchParams(useLocation().search) // acessar parametros do location usando pesquisa dos parametros
}

export default function Assistir(props){
    
    const query = useQuery()
    
    return(


        <div className="page">
            {query.get("v")}
        </div>
    )
}