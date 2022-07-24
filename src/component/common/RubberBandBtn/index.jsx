import React from 'react'
import styles from "./Btn.module.css";

const RubberBtn = ({name}) => {
    return (
        <div>
            <h1 className={styles.text} >{name}</h1>

        </div>
    )
}

export default RubberBtn