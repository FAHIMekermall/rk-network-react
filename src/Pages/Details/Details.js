import React from "react"

const Details = () => {
	return (
		<div>
			<section className="detail">
				<div className="container">
					<div className="row">
						<div className="detail-item wow animate__animated animate__fadeInLeft animate__slow">
							<span>
								<img
									width="30px"
									height="40px"
									src="./assets/high.svg"
									alt=""
								/>
							</span>
							<h2>High-Speed Performance</h2>
							<div className="line"></div>
							<p className="text">
								Rk network provide the ultimate speed network,
								with no lag gaming, no buffer streaming and its
								also support no buffer 4k video on Youtube.
							</p>
						</div>

						<div className="detail-item wow animate__animated animate__fadeInUp animate__s">
							<span>
								<img width="30px" height="40px" src="" alt="" />
							</span>
							<h2>Fastest Service</h2>
							<div className="line"></div>
							<p className="text">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Totam provident suscipit culpa
								minus aliquid possimus, nemo ducimus amet itaque
								nam quis quaerat debitis. Quis, quidem.
							</p>
						</div>

						<div className="detail-item wow animate__animated animate__fadeInRight animate__slow">
							<span>
								<img
									width="30px"
									height="40px"
									src="./assets/customer-service-svgrepo-com.svg"
									alt=""
								/>
							</span>
							<h2>24 Hour Support</h2>
							<div className="line"></div>
							<p className="text">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Totam provident suscipit culpa
								minus aliquid possimus, nemo ducimus amet itaque
								nam quis quaerat debitis. Quis, quidem.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Details
