import { Route, Routes } from "react-router-dom"
import { useGetUserQuery } from "../firebase/authentication/queries"
import HomePage from "../pages/HomePage"
import MyImagesPage from "../pages/MyImagesPage"

export default function AppRoutes() {
	const { data: userData } = useGetUserQuery()
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			{userData && <Route path="/my-images" element={<MyImagesPage />} />}
		</Routes>
	)
}
