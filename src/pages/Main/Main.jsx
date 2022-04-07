import React, { useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import Styles from './Main.module.css'
import { useMessage } from '../../hooks/message.hook'
import { useNavigate } from 'react-router-dom'

export const Main = () => {
    const { loading, request } = useHttp()
	const [computers, setComputers] = useState([])
    const { successMessage, errorMessage } = useMessage()
    let navigate = useNavigate()

	useEffect(() => {
		request('https://computer-midterm.herokuapp.com/api/computers').then(
			(response) => {
				setComputers(response)
			}
		)
	}, [request])
	
    const deleteComputer = (id) => {
        request(`https://computer-midterm.herokuapp.com/api/computers/delete/${id}`, 'DELETE')
        successMessage('Computer has been deleted')
        navigate('/add')
        navigate('/')
    }
    
    if (loading === true ) {
        return(
            <div className="loading_block">
                <span className="loading"></span>
            </div>
        )
    }
  return (
    <div className={Styles.main}>
        <div className="container">
            <div className={Styles.block}>
                {
                    computers.map(({id, brand, model, year,description, price }, i) =>{
                        return(
                            <div key={i} className={Styles.item} data-aos="fade-left" data-aos-duration={(i+1) * 250}>
                                <h2>{ brand }{ model},{ year }</h2>
                                <p>Descroption:{ description }</p>
                                <p> { price }$</p>
                                <button onClick={ (event) => {event.preventDefault(); deleteComputer(id)}}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
