// DashboardLayout.js
import React, { useState } from "react";
import Sidebar from "./sidebar";
import "../../../CSS/dashboardLayoutView.css";

const DashboardLayout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className="dashboard-layout">
			<Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
			<div className="content">
				<button className="menu-btn" onClick={toggleSidebar}>
					☰
				</button>
				<h1>Welcome to the Dashboard</h1>
				<p>Your content goes here.</p>
			</div>
		</div>
	);
};

export default DashboardLayout;
