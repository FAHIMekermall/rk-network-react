import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
	const [y, setY] = useState(window.scrollY)

	const handleNavigation = (e) => {
		const window = e.currentTarget
		if (y > window.scrollY) {
			console.log("scrolling up")
		} else if (y < window.scrollY) {
			console.log("scrolling down")
		}
		setY(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener("scroll", (e) => handleNavigation(e))
		return () => {
			// return a cleanup function to unregister our function since its gonna run multiple times
			window.removeEventListener("scroll", (e) => handleNavigation(e))
		}
	}, [y])
	return (
		<div>
			<header class="header" id="intro">
				<nav class="navbar">
					<div class="container">
						<div class="brand-and-toggler">
							<a href="index.html" class="navbar-brand">
								RK<span> Network</span>
							</a>
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
									<a href="#intro" class="nav-link">
										intro
									</a>
								</li>
								<li class="nav-item">
									<a href="#feature" class="nav-link">
										feature
									</a>
								</li>
								<li class="nav-item">
									<a href="#team" class="nav-link">
										team
									</a>
								</li>
								<li class="nav-item">
									<a href="#pricing" class="nav-link">
										pricing
									</a>
								</li>
								<li class="nav-item">
									<a href="#testimonial" class="nav-link">
										testimonial
									</a>
								</li>
								<li class="nav-item">
									<a href="#contact" class="nav-link">
										contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<div class="hero-div center container">
					<h1>Touch with Tomorrow</h1>
					<p class="animate__animated animate__fadeInUp animate__slow">
						Our philosophy is to empower our users to bring passion
						to their life.
					</p>

					<div class="hero-btns animate__animated animate__fadeInUp animate__slow">
						<button
							type="button"
							onclick="location.hash='contact';"
							class="btn-trans"
						>
							Contact Us
						</button>
						<button
							type="button"
							onclick="location.hash='team';"
							class="btn-white"
						>
							meet our people
						</button>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header
