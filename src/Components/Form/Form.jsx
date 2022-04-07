import React, { useState } from 'react'
import Styles from './Form.module.css'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { useNavigate } from 'react-router-dom'

export const Form = ({ page }) => {
	const { loading, request } = useHttp()
	const { successMessage, errorMessage } = useMessage()
	const [body, setBody] = useState({
		brand: '',
		model: '',
		description: '',
		year: '',
		price: '',
	})
	let navigate = useNavigate()

	const inputs = [
		{ type: 'text', placeholder: 'Brand', name: 'brand' },
		{ type: 'text', placeholder: 'Model', name: 'model' },
		{ type: 'text', placeholder: 'Description', name: 'description' },
		{ type: 'number', placeholder: 'Year', name: 'year' },
		{ type: 'number', placeholder: 'Price', name: 'price' },
	]
	const changeHandler = (event) => {
		setBody({ ...body, [event.target.name]: event.target.value })
	}
	const addComputer = (event) => {
		event.preventDefault()

		if (Object.values(body).includes('') === true) {
			errorMessage('Inputs should not be empty!')
		} else {
			request(
				'https://computer-midterm.herokuapp.com/api/computers/create',
				'POSt',
				{ ...body }
			) // если запрос прошел успешно .then - тогда делаем то, это
			successMessage('Computer has been created!')

			navigate('/')
		}
	}

	return (
		<form className={Styles.form}>
			{inputs.map(({ type, placeholder, name }, i) => {
				return (
					<input
						type={type}
						placeholder={placeholder}
						name={name}
						key={i}
						onChange={changeHandler}
					/>
				)
			})}
			{loading ? 
				<span className="loading"></span>
			 : 
				<button onClick={addComputer}>{page}</button>
			}
		</form>
	)
}
