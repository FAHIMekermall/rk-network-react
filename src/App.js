import "./App.css"
import { Link, Route, Routes } from "react-router-dom"
import AddPackage from "./AddPackage"
import Home from "./Pages/Home/Home"
import Packages from "./Pages/Packages/Packages"
import Team from "./Pages/Team/Team"
import Header from "./Shared/Header/Header"
import Footer from "./Pages/Footer/Footer"

function App() {
	return (
		<>
		<Header></Header>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/package" element={<Packages></Packages>}></Route>
				<Route path="our-team" element={<Team/>} ></Route>
				<Route
					path="/admin-manage-package"
					element={<AddPackage></AddPackage>}
				></Route>
			</Routes>
			<Footer></Footer>
		</>
	)
}

export default App
