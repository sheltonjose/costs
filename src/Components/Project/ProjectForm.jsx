import { useEffect, useState } from 'react'

import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitButton from '../Form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({handleSubmit,btnText, projectData}){
    const [project, setProject] = useState(projectData || {})
    const [categories, setCategories] = useState([])

    useEffect(()=>{
    //request de Get
    fetch("http://localhost:5000/categories",{
        method:"GET",
        headers:{
            'Content-Type':'application/json',
        },
        }).then((resp)=>resp.json())
        .then((data)=>{
            setCategories(data)
        })
        .catch(err =>console.log(err))   //promise
    },[])
    const submit= (e)=>{
        e.preventDefault()// nao deixo o formulario ser executado como pag reload
        //console.log(project)
        handleSubmit(project)
    }
    function handleChange(e){
        setProject({...project, [e.target.name]:e.target.value})
        
    }

     function handleCategory(e){
        setProject({...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
         })
    }



    return(
        <form onSubmit={submit} className={styles.form}>
            <div>
                <Input type="text" text="Nome do projecto" name="name"  placeholder="insira o nome do projecto" handleOnChange={handleChange} value={project.name? project.name: ''}/>
            </div>

            <div>
               <Input type="number" text="Orçamento do projecto" name="budget" placeholder="insira o orçamento total"handleOnChange={handleChange} value={project.budget ? project.budget:''}/>
            </div>
            <div>
                <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''}/>
            </div>
            <div>
                <SubmitButton text={btnText}/>
            </div>
        </form>
    )
}
export default ProjectForm