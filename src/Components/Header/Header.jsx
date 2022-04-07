import React, { useState } from 'react'
import Styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
	let links = [
		{ text: 'Add', path: '/add' },
		{ text: 'Edit', path: '/edit' },
		
	]
	return (
		<header className={Styles.header}>
			<div className="container">
				<div className={Styles.block}>
					<NavLink to={'/'}>Computer</NavLink>

					<nav className={Styles.menu}>
						<ul>
							{links.map(({ text, path }, i) => {
								return (
									<li key={i} className={Styles.item}>
										<NavLink to={path}>{text}</NavLink>
									</li>
								)
							})}
						</ul>
						<ul></ul>
					</nav>
				</div>
			</div>
		</header>
	)
}
