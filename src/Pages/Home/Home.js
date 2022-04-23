import React, {  } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
	const navigate = useNavigate()
	return (
		<div>
			<div className="banner">
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
							onClick={() => navigate('/team')}
						>
							meet our people
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
