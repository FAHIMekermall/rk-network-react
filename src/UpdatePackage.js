import { parseActionCodeURL } from "firebase/auth"
import React from "react"
import { Toaster } from "react-hot-toast"
import { Link, Outlet } from "react-router-dom"
import usePackages from "./Hooks/usePackages"
import Package from "./Pages/Package/Package"
import UpdateForm from "./UpdateForm"

const UpdatePackage = () => {
	const [packages, setPackages] = usePackages()
	const handleDelete = (id) => {
		fetch(`https://tranquil-depths-44277.herokuapp.com/package-del/${id}`, {
			method: "delete",
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
		const ramaining = packages.filter((pack) => pack._id !== id)
		setPackages([...ramaining])
	}
	return (
		<section class="pricing" id="pricing">
			<div class="container">
				<div class="title">
					<h2 class="wow animate__animated animate__bounceIn animate__slow">
						Our Package
					</h2>
					<p class="text">Lorem ipsum dolor sit amet consectetur</p>
				</div>

				<div class="row wow animate__animated animate__fadeInUp animate__slow">
					{packages.map((pack) => (
						<Package key={pack._id} pack={pack}>
							<button onClick={() => handleDelete(pack._id)}>
								Delete
							</button>
							<UpdateForm pack={pack}></UpdateForm>
						</Package>
					))}
					<Toaster></Toaster>
				</div>
			</div>
		</section>
	)
}

export default UpdatePackage
