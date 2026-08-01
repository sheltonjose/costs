import {useLocation} from 'react-router-dom'
import Message from "../Layout/Message"

function Projects(){

    const location =  useLocation()


    //pagina que exige todos projectos cadastrados
    return (
        <div>
            <h1>Meus Pojectos</h1>
            <Message msg="Alguma mensagem" />
        </div>
    )
}
export default Projects