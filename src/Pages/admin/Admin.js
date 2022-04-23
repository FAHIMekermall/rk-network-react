import { signOut } from "firebase/auth"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, Outlet } from "react-router-dom"
import auth from "../../firebase.init"
import styles from "./Admin.module.css"

const Admin = () => {
	const [user] = useAuthState(auth)
	return (
		<div>
			<header>
				<nav>
					<ul className={styles.admin_header}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/admin/add-package">Add new package</Link>
						</li>
						<li>
							<Link to="/admin/update-package">update package</Link>
						</li>
						<li>
							<Link to="/admin/update-team">update team</Link>
						</li>
						<li>
							<Link to="/update-testimonial">
								update testimonial
							</Link>
						</li>
						{
							user && <button onClick={() => signOut(auth)}>Sign out</button>
						}
					</ul>
				</nav>
			</header>
			<Outlet></Outlet>
		</div>
	)
}

export default Admin
