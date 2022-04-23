import React from "react"
import { Link, Outlet } from "react-router-dom"
import styles from './Admin.module.css'

const Admin = () => {
	return (
		<div>
			<header >
				<nav> 
					<ul className={styles.admin_header}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/admin">Admin home</Link>
						</li>
						<li>
							<Link to="/add-package">Add new package</Link>
						</li>
						<li>
							<Link to="/update-package">update package</Link>
						</li>
						<li>
							<Link to="/update-team">update team</Link>
						</li>
						<li>
							<Link to="/update-testimonial">
								update testimonial
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet></Outlet>
		</div>
	)
}

export default Admin
