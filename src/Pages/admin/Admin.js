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
			<header class="header-sec" id="intro">
				<nav class="navbar">
					<div class="container">
						<div class="brand-and-toggler">
							<Link to="" class="navbar-brand">
								RK<span> Network</span>{" "}
								<span
									style={{ fontSize: "1rem", color: "red" }}
								>
									Admin
								</span>
							</Link>
							<button
								type="button"
								class="navbar-toggler"
								id="navbar-toggler"
							>
								<i class="fas fa-bars"></i>
							</button>
						</div>

						<div class="navbar-collapse">
							<ul class="navbar-nav">
								<li class="nav-item">
									<Link to="/" class="nav-link">
										Home
									</Link>
								</li>
								<li class="nav-item">
									<Link
										to="/admin/update-team"
										class="nav-link"
									>
										team manage
									</Link>
								</li>
								<li class="nav-item">
									<Link
										to="/admin/update-package"
										class="nav-link"
									>
										manage package
									</Link>
								</li>
								<li class="nav-item">
									<Link
										to="/admin/add-package"
										class="nav-link"
									>
										add package
									</Link>
								</li>
								{user && (
									<button
										style={{
											color: "gray",
											padding: "10px",
											outline: "none",
											border: "0",
											margin: "0 10px",
										}}
										class="nav-link"
										onClick={() => signOut(auth)}
									>
										Sign out
									</button>
								)}
							</ul>
						</div>
					</div>
				</nav>
			</header>
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
							<Link to="/admin/update-package">
								update package
							</Link>
						</li>
						<li>
							<Link to="/admin/update-team">update team</Link>
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
