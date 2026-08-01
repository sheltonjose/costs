import styles  from './Container.module.css'

function Container(props){
    //o que vou poder alterar no container? vou poder alterar classes que vao fazer com que eu possa mudar a disposição dos itens dentro do meu container(vai ser um container flex) vai mudar as direction por exemplo
    return(
        //elementos filhos que estao encapsulado nesse elemento
        <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
       

    )
    
}
export default Container