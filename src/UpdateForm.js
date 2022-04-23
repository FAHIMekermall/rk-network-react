import React from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

const UpdateForm = ({pack:{_id}}) => {
    const notifySucces = (text) => toast.success(text)
    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit =  (data) => {
		 fetch("https://tranquil-depths-44277.herokuapp.com/package-update/"+_id, {
			body: JSON.stringify(data),
			headers: {
				"content-type": "application/json",
			},
			method: "put",
		})
			.then((res) => res.json())
			.then((result) => notifySucces("Package Updated successfully"))
	}
	return (
		<div>
			<div>
				<form
					style={{
						display: "grid",
						gridGap: "25px",
						justifyContent: "center",
					}}
					onSubmit={handleSubmit(onSubmit)}
				>
					<h1 style={{ color: "red" }}>Add/update package</h1>
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
						placeholder="description 1"
						{...register("description1", {
							required: true,
						})}
					/>
					<input
						type="text"
						placeholder="description 2"
						{...register("description2", {
							required: true,
						})}
					/>
					<input
						type="text"
						placeholder="description 3"
						{...register("description3", {
							required: true,
						})}
					/>
					<input
						type="text"
						placeholder="description 4"
						{...register("description4", {
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
					<input type="reset" value="Reset" />
				</form>
			</div>
		</div>
	)
}

export default UpdateForm
