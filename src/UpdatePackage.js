import React from "react"
import usePackages from "./Hooks/usePackages"
import Package from "./Pages/Package/Package"

const UpdatePackage = () => {
	const [packages, setPackages] = usePackages()
	return (
		<div class="row wow animate__animated animate__fadeInUp animate__slow">
			{packages.map((pack) => (
				<Package key={pack._id} pack={pack}>
					<button>Delete</button>
				</Package>
			))}
		</div>
	)
}

export default UpdatePackage
