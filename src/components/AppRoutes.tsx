import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import MyImagesPage from "../pages/MyImagesPage"
import NotFoundPage from "../pages/NotFoundPage"
import ProfilePage from "../pages/ProfilePage"
import SingleImagePage from "../pages/SingleImagePage"
import RequireAuth from "./RequireAuth"

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/images/:stockId" element={<SingleImagePage />} />
			<Route path="*" element={<NotFoundPage />} />
			<Route
				path="/my-images"
				element={
					<RequireAuth>
						<MyImagesPage />
					</RequireAuth>
				}
			/>
			<Route
				path="/profile"
				element={
					<RequireAuth>
						<ProfilePage />
					</RequireAuth>
				}
			/>
		</Routes>
	)
}
