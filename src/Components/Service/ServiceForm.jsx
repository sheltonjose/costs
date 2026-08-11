import { useState } from 'react'

import Input from '../Form/Input'
import SubmitButton from '../Form/SubmitButton'

import styles from '../Project/ProjectForm.module.css'

function ServiceForm({handleSubmit, Btntext, projectData}){

    function submit(){

    }

    function handleChange(e){
        
    }

     return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />

               <Input
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder="Insira o valor total"
                handleOnChange={handleChange}
            />

               <Input
                type="text"
                text="Descrição do serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
            />
            <SubmitButton text={Btntext}/>
        </form>
     )
}
export default ServiceForm