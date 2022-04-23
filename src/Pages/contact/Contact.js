import React from "react"

const Contact = () => {
	return (
		<div>
			<section class="contact" id="contact">
				<div class="container">
					<div class="title">
						<h2 class="wow animate__animated animate__bounceIn animate__slow">
							Contact Us
						</h2>
						<p class="text">
							Lorem ipsum dolor sit amet consectetur
						</p>
					</div>

					<div class="row wow animate__animated animate__fadeInUp animate__slow">
						<div class="contact-left">
							<h2>Send Message Here</h2>
							<div>
								<input
									type="text"
									class="form-control"
									placeholder="Name"
								/>
								<input
									type="email"
									class="form-control"
									placeholder="Email"
								/>
								<textarea
									placeholder="Message"
									rows="6"
								></textarea>
								<input type='submit' class="submit-btn" value={'Send now'} />
								<h4 id="sorry">
									The contact form has been disabled for a
									technical problem, Sorry
								</h4>
							</div>
						</div>

						<div class="contact-right">
							<div id="map">
								<h2>Visit Office</h2>
								<p class="text">
									Near of Beltoli Bridge , Master-Market{" "}
									<br />
									Sadar, Mymensingh.
								</p>
							</div>
							<div>
								<h2>Call Us</h2>
								<p class="text">01892-564686</p>
							</div>
							<div class="sendMail">
								<h2>Send Email</h2>
								<p class="text">rknetwork84@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Contact
