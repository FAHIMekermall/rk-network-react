import React from "react"
import Person from "./Person"

const Team = () => {
	return (
		<div>
			<div class="team" id="team">
				<div class="container">
					<div class="title">
						<h2 class="wow animate__animated animate__bounceIn animate__slow">
							Meet Best People
						</h2>
						<p class="text">
							Lorem ipsum dolor sit amet consectetur
						</p>
					</div>

					<div class="row owl-carousel owl-theme wow animate__animated animate__fadeInUp animate__slow">
						<Person></Person>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Team
