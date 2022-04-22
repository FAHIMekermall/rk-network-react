import "./App.css"
import { Link, Route, Routes } from "react-router-dom"
import AddPackage from "./AddPackage"
import Home from "./Pages/Home/Home"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route
					path="/admin-manage-package"
					element={<AddPackage></AddPackage>}
				></Route>
			</Routes>
		</>
	)
}

export default App
