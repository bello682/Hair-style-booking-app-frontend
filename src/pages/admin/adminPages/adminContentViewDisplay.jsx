import React from "react";
import AdminHomePage from "./adminHomePage";
import { Outlet } from "react-router";

const AdminContentViewDisplay = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default AdminContentViewDisplay;
