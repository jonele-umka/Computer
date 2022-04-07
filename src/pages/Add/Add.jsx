import React from 'react'
import { Form } from '../../Components/Form/Form'
import Styles from './Add.module.css'
export const Add = () => {
  return (
    <div className={Styles.add}>
        <div className="container">
        <h2>Добавить ноутбук</h2>
        <Form page={'Add'}/>
    </div>
    </div>
  )
}
