import React from "react";
import "../../../CSS/userDashboardLayoutView.css";
import User_dashboard_layout from "../LAYOUTS/user_dashboard_layout";
// import { Outlet } from "react-router-dom";

const Users_Dashboard = () => {
	return (
		<div className="dashboard_body">
			<User_dashboard_layout />
			{/* <Outlet /> */}
		</div>
	);
};

export default Users_Dashboard;
