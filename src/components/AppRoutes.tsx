import { Route, Routes } from "react-router-dom"
import App from "../App"
import { useGetUserQuery } from "../firebase/authentication/queries"
import MyImages from "./MyImages"

export default function AppRoutes() {
	const { data: userData } = useGetUserQuery()
	return (
		<Routes>
			<Route path="/" element={<App />} />
			{userData && <Route path="/my-images" element={<MyImages />} />}
		</Routes>
	)
}
