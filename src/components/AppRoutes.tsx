import { Route, Routes } from "react-router-dom"
import App from "../App"
import MyImages from "./MyImages"

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/my-images" element={<MyImages />} />
		</Routes>
	)
}
