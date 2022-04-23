import React from "react"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
	const {pathname} = useLocation()
	if(pathname.includes('login') || pathname.includes('admin')){
		return ''
	}
	return (
		<div>
			<div>
				<header class="header-sec" id="intro">
					<nav class="navbar">
						<div class="container">
							<div class="brand-and-toggler">
								<Link to="" class="navbar-brand">
									RK<span> Network</span>
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
									{/* <li class="nav-item">
										<Link to="/feature" class="nav-link">
											feature
										</Link>
									</li> */}
									<li class="nav-item">
										<Link to="/team" class="nav-link">
											team
										</Link>
									</li>
									<li class="nav-item">
										<Link to="/package" class="nav-link">
											package
										</Link>
									</li>
									<li class="nav-item">
										<Link
											to="/testimonial"
											class="nav-link"
										>
											testimonial
										</Link>
									</li>
									<li class="nav-item">
										<Link to="/contact" class="nav-link">
											contact
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</header>
			</div>
		</div>
	)
}

export default Header
