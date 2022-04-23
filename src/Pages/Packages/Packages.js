import React, { useState } from "react"
import usePackages from "../../Hooks/usePackages"
import Package from "../Package/Package"

const Packages = () => {
	const [packages, setPackages] = usePackages()
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
                        {packages.map(pack => <Package key={pack._id} pack={pack}></Package>)}
                    </div>
				</div>
			</section>
		</div>
	)
}

export default Packages
