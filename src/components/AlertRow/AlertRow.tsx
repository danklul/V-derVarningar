import React from 'react'
import styles from './AlertRow.module.css'


interface AlertProps {
    title: string,
    onClick: (id:string) => void,
    date: Date,
    id: string,
} 


const AlertRow = ({title, date, id, onClick}: AlertProps) => {
    return( 
        <div onClick={ () => onClick(id) } className={styles.container} >
            <h3 style={{marginTop: 4, marginBottom: 4}}> {title} </h3>
            <p style={{marginTop: 2.5, marginBottom: 2.5}}> {date.toLocaleString('en-SE')} </p>
        </div>
    )
}

export default AlertRow
