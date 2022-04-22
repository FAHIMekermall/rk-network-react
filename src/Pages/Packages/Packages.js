import React from "react"
import Package from "../Package/Package"

const Packages = () => {
	return (
		<div>
			<section class="pricing" id="pricing">
				<div class="container">
					<div class="title">
						<h2 class="wow animate__animated animate__bounceIn animate__slow">
							Our Package
						</h2>
						<p class="text">
							Lorem ipsum dolor sit amet consectetur
						</p>
					</div>

					<div class="row wow animate__animated animate__fadeInUp animate__slow">
                        <Package></Package>
                        <Package></Package>
                        <Package></Package>
                        <Package></Package>
                        <Package></Package>
                        <Package></Package>
                        <Package></Package>
                        <Package></Package>
                        <Package></Package>
                    </div>
				</div>
			</section>
		</div>
	)
}

export default Packages
