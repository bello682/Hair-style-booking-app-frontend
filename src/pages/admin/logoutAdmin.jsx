// Logout.js
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // assuming you’re using React Router
import { logoutAdmin } from "../../store/action/adminActions/login&outAction";

const AdminLogout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logoutAdmin());
		navigate("/admin-login"); // Redirect to the login page after logout
	};

	return (
		<button onClick={handleLogout} style={logoutButtonStyle}>
			Logout
		</button>
	);
};

// Optional styling for the button
const logoutButtonStyle = {
	padding: "10px 20px",
	backgroundColor: "#f44336",
	color: "#fff",
	border: "none",
	borderRadius: "5px",
	cursor: "pointer",
	fontSize: "16px",
	width: "100%",
};

export default AdminLogout;
