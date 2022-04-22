import React from "react"

const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<div>
			<footer class="footer center">
				<div class="container">
					<p class="text">Copyright &copy; Rk netowork | {year}</p>
					<div class="footer-links">
						<a href="#" class="center">
							<i class="fab fa-facebook-f"></i>
						</a>
						<a href="#" class="center">
							<i class="fab fa-instagram"></i>
						</a>
						<a href="#" class="center">
							<i class="fab fa-linkedin"></i>
						</a>
						<a href="#" class="center">
							<i class="fab fa-twitter"></i>
						</a>
						<a href="#" class="center">
							<i class="fab fa-pinterest"></i>
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
