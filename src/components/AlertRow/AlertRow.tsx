import React from 'react'
import styles from './AlertRow.module.css'

interface AlertProps {
    title: string,
    valueCode: string,
    date: string,

} 


const AlertRow = ({title, valueCode, date}: AlertProps) => {
    return( 
        <div className={styles.container}>
            <h3> {title} </h3>
            <p> {valueCode} </p>
            <p> {date} </p>
        </div>
    )
}

export default AlertRow
