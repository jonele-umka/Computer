import React from 'react'
import Styles from './App.module.css'
import { Header } from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main/Main'
import { Add } from './pages/Add/Add'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({ duration: 1500, startEvent: 'load' })
export function App() {
	
	return (
		<div className={Styles.app}>
			<Router>
				<Header />

				<Routes>
					<Route
						path="/"
						exact
						element={
							(
								<Main />
							)
						}
					/>
					<Route path='/add' exact element={<Add />}/>
				</Routes>
			</Router>
		</div>
	)
}
