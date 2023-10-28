import React from 'react'
import styles from './InputControl.module.css'


function InputControl({label, value, onChange, ...props}) {
    return (
        <div className={styles.container}>
            {label && <label>{label}</label>}
            <input type="text" {...props} />      
        </div>
    )
}

export default InputControl
