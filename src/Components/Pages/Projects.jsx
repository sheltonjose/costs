import {useLocation} from 'react-router-dom'
import Message from "../Layout/Message"
import Container from '../Layout/Container'
import LinkButton from '../Layout/LinkButton'

import styles from './Projects.module.css'

function Projects(){

    const location =  useLocation()
    let message= ''

    if(location.state){
        message = location.state.message
    }
    //pagina que exige todos projectos cadastrados
    return (
        <div className={styles.project_container}>
           <div className={styles.title_container}>
                <h1>Meus Projectos</h1>
                 <LinkButton to="/newproject" text="criar projecto"/>
           </div>
           {message && <Message type="sucess" msg={message} />}
           <Container customClass="start">
                <p>Projectos...</p>

           </Container>
        </div>
    )
}
export default Projects