import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../Layout/Loading'
import Container from '../Layout/Container'

function Project(){
    const {id} =useParams()
    
    const [project, setProject] = useState([])
    const [showProjectForm,setShowProjectForm ] = useState(false)
    //usar o useEffect para chamar o projecto
    useEffect(()=>{

        setTimeout(()=>{
                  fetch(`http://localhost:5000/projects/${id}`,{
            method: "GET",
            headers:{
                   'Content-Type' : 'application/json' 
            },
        }).then(resp=>resp.json()).then(
            (data)=>{
                setProject(data)
            }
        ).catch(err=>console.log(err))
        },200)
  
    },[id])

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }


    return(
            <div>
                {project.name? (
                <div className={styles.project_details}>
                    <Container customClass="column" >
                        <div className={styles.details_container} >
                            <h1>Projecto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projecto' : 'Fechar'}
                             </button>
                             {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria:</span>{project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento: </span> {project.budget} MZN
                                    </p>
                                     <p>
                                        <span>Total Utilizado: </span> {project.cost} MZN
                                    </p>
                                </div>
                             ):(
                                <div className={styles.project_info}>
                                    <p>
                                        Detalhes do projecto
                                    </p>
                                </div>
                             )}
                        </div>
                    </Container>
                </div>

                ): (<Loading/>)
                }
            </div>
    )
}

export default Project