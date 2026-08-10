import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../Layout/Loading'
import Container from '../Layout/Container'
import ProjectForm from '../Project/ProjectForm'
import Message from '../Layout/Message'

function Project(){
    const {id} =useParams()
    
    const [project, setProject] = useState([])
    const [showProjectForm,setShowProjectForm ] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

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

    function editPost(project){
        // budget validation
        if(project.budget < project.cost){
            setMessage('O orçamento não pode ser menor que o custo do projecto')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(project),
        }).then(resp=>resp.json()).then((data)=>{

            setProject(data)
            setShowProjectForm(false)
            setMessage('Projecto actualizado!')
            setType('sucess')

        }).catch(err=>console.log(err))
    }

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }


    return(
            <div>
                {project.name? (
                <div className={styles.project_details}>
                    <Container customClass="column" >
                        {message && <Message type={type} msg={message} />}
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
                                    <p>Form</p>
                                    
                                    <ProjectForm 
                                    handleSubmit={editPost} 
                                    btnText="Concluir a edição" 
                                    projectData={project}/>

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