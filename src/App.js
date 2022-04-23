import "./App.css"
import { Link, Route, Routes } from "react-router-dom"
import AddPackage from "./AddPackage"
import Home from "./Pages/Home/Home"
import Packages from "./Pages/Packages/Packages"
import Team from "./Pages/Team/Team"
import Header from "./Shared/Header/Header"
import Footer from "./Pages/Footer/Footer"
import RecquireAuth from "./Shared/RecquireAuth/RecquireAuth"
import Login from "./Pages/Login/Login"
import Admin from "./Pages/admin/Admin"
import Contact from "./Pages/contact/Contact"
import UpdatePackage from "./UpdatePackage"
import UpdateForm from "./UpdateForm"

function App() {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/package" element={<Packages></Packages>}></Route>
				<Route path="/our-team" element={<Team />}></Route>
				<Route path="/contact" element={<Contact></Contact>}></Route>
				<Route path="/login" element={<Login></Login>}></Route>
				<Route
					path="/admin"
					element={
						<RecquireAuth>
							<Admin></Admin>
						</RecquireAuth>
					}
				>
					<Route
						path="add-package"
						element={<AddPackage></AddPackage>}
					></Route>
					<Route
						path="update-package"
						element={<UpdatePackage></UpdatePackage>}
					></Route>
				</Route>
			</Routes>
			<Footer></Footer>
		</>
	)
}

export default App
