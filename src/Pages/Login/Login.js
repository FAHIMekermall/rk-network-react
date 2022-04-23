import React from "react"
import {
	useAuthState,
	useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import { Navigate, useLocation } from "react-router-dom"
import auth from "../../firebase.init"

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const location = useLocation()
	const from = location?.state?.from || "/"
	const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
	const [user] = useAuthState(auth)
	const onSubmit = (data) => {
		console.log(data)
		signInWithEmailAndPassword(data.email, data.password)
	}
	if (user) {
		return <Navigate to={from}></Navigate>
	}
	return (
		<div>
			<form
				style={{
					display: "grid",
					gridGap: "25px",
					justifyContent: "center",
				}}
				onSubmit={handleSubmit(onSubmit)}
			>
				<h1 style={{ color: "red" }}>Login</h1>
				<input
					type="email"
					placeholder="email"
					{...register("email", {
						required: true,
					})}
				/>
				<input
					type="password"
					placeholder="password"
					{...register("password", {
						required: true,
					})}
				/>
				<input type="submit" />
			</form>
		</div>
	)
}

export default Login
