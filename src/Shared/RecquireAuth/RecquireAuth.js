import React from "react"
import auth from "../../firebase.init"
import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, useLocation, useNavigate } from "react-router-dom"

const RecquireAuth = ({ children }) => {
	const [user, loading] = useAuthState(auth)
	const { pathname } = useLocation()
	if (user) {
		return children
	} else {
		return (
			<Navigate
				to={"/login"}
				state={{ from: pathname }}
				replace
			></Navigate>
		)
	}
}

export default RecquireAuth
