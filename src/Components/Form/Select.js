import styles from './Select.module.css'
function Select({text,name, options, handleOnChange, value}){
    //handleOnChange manusiar os dados do input
    return(
        <div className={styles.form_control}>
            <label htmlFor={name} className={styles.form_control_label}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((option)=>(
                    <option key={option.id} value={option.id} >{option.name}</option>
                ))}
           </select>
        </div>
    )
}
export default Select