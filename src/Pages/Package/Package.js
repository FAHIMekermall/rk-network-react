import React from "react"

const Package = ({
	pack: {
		_id,
		packageName,
		description1,
		description2,
		description3,
		description4,
		cost,
	},
	children,
}) => {
	return (
		<div>
			<div class="pricing-item">
				<h2>{packageName}</h2>
				<div class="price">
					<span>BDT: {cost} tk</span>
					<span class="text">Monthly</span>
				</div>
				<ul>
					<li>{description1}</li>
					<li>{description2}</li>
					<li>{description3}</li>
					<li>{description4}</li>
				</ul>
				{children}
			</div>
			
		</div>
	)
}

export default Package
