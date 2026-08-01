import {Link} from 'react-router-dom'
import styles from './LinkButton.module.css'


function LinkButton({to,text}){
    //vou receber duas propriedades "to" onde vai o link que o user vai clicar, "text" vou mudar o texto baseando onde vou usar ele
    return(
        <Link className={styles.btn}  to={to}>
            {text}
        </Link>
    )
}
export default LinkButton