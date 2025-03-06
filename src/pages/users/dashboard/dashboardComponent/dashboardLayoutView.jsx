// DashboardLayout.js
import React, { useState } from "react";
import Sidebar from "./sidebar";
import "../../../CSS/dashboardLayoutView.css";
import HeaderPage from "../../../main-website-pages/headerFooter/header";

const DashboardLayout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [none, setNone] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	if (none) {
		setNone(<HeaderPage />);
	}

	return (
		<div className="dashboard-layout w-screen flex gap-4">
			{" "}
			{/*w-full*/}
			<div>
				<Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
			</div>
			<div className="content">
				<h1>Welcome to the Dashboard</h1>
				<p>Your content goes here.</p>
			</div>
		</div>
	);
};

export default DashboardLayout;
