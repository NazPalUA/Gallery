import { Route, Routes } from "react-router-dom"
import { useGetUserQuery } from "../firebase/authentication/queries"
import HomePage from "../pages/HomePage"
import MyImagesPage from "../pages/MyImagesPage"
import SingleImagePage from "../pages/SingleImagePage"

export default function AppRoutes() {
	const { data: userData } = useGetUserQuery()
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/images/:stockId" element={<SingleImagePage />} />
			{userData && <Route path="/my-images" element={<MyImagesPage />} />}
		</Routes>
	)
}
