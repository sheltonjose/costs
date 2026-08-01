import styles from './Home.module.css'
import saving from '../../img/saving.png'
import LinkButton from '../Layout/LinkButton'


function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projectos agora mesmo!</p>
           <LinkButton to="/newproject" text="criar projecto"/>
            <img src={saving} alt='Costs'></img>

        </section>
    )
}
export default Home