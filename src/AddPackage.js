import React from "react"
import { useForm } from "react-hook-form"

const AddPackage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = (data) => {
		console.log(data)
		fetch("http://localhost:5000/package", {
			body: JSON.stringify(data),
			headers: {
				"content-type": "application/json",
			},
			method: "post",
		})
			.then((res) => res.json())
			.then((result) => console.log(result))
	}

	return (
		<div>
			<form style={{display:'grid', gridGap:'25px', justifyContent:"center"}} onSubmit={handleSubmit(onSubmit)}>

				<h1 style={{color:'red', }}>
					Add/update package
				</h1>
				<input
					type="text"
					placeholder="package-name"
					{...register("packageName", {
						required: true,
						maxLength: 100,
					})}
				/>
				<input
					type="text"
					placeholder="description"
					{...register("description", {
						required: true,
					})}
				/>
				<input
					type="text"
					placeholder="description"
					{...register("description", {
						required: true,
					})}
				/>
				<input
					type="text"
					placeholder="description"
					{...register("description", {
						required: true,
					})}
				/>
				<input
					type="text"
					placeholder="description"
					{...register("description", {
						required: true,
					})}
				/>
				<input
					type="number"
					placeholder="cost"
					{...register("cost", {
						required: true,
					})}
				/>
				<input type="submit" />
			</form>
		</div>
	)
}

export default AddPackage
