import Header from "./components/header";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "../src/components/Main/Main";
import Login from "../src/components/Login/Login";
import Register from "../src/components/Register/Register";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Register />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;