import React from "react"

const Person = () => {
	return (
		<div>
			<div class="team-item">
				<div class="team-img">
					<img
						src="https://scontent.fcla3-1.fna.fbcdn.net/v/t39.30808-6/278634400_1064462074429108_2468861124949474091_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeGZo2uDu5k9qaod9y1TZskcbdItVEUG3S5t0i1URQbdLkrh2hNjBBh0riCtqwpG6y4uVtJPbU4tBqq1uqOuKP6D&_nc_ohc=hnalUheJWB0AX9VAtr1&_nc_ht=scontent.fcla3-1.fna&oh=00_AT_IHHMQpmfkoFP6AF7fh1PRiaG06WLDTEIvMUVvDmhNhg&oe=6268A266"
						alt=""
                        width={'100px'}
					/>
					<div class="team-icons">
						<a href="#" class="center">
							<i class="fab fa-facebook-f"></i>
						</a>
						<a href="#" class="center">
							<i class="fab fa-twitter"></i>
						</a>
						<a href="#" class="center">
							<i class="fab fa-instagram"></i>
						</a>
					</div>
				</div>
				<div class="team-info">
					<h3>Full Name Here</h3>
					<span>Web Developer</span>
				</div>
			</div>
		</div>
	)
}

export default Person
