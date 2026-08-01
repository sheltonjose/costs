import styles from './Input.module.css'
function Input({type,text,name, placeholder,handleOnChange, value}){
    //handleOnChange manusiar os dados do input
    return(
        <div className={styles.form_control}>
            <label htmlFor={name} className={styles.form_control_label}>{text}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}/>
        </div>
    )
}
export default Input