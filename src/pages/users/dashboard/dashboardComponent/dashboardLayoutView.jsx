// DashboardLayout.js
import React, { useState } from "react";
import Sidebar from "./sidebar";
import "../../../CSS/dashboardLayoutView.css";
import HeaderPage from "../../../main-website-pages/headerFooter/header";
import { Route, Routes } from "react-router";
import NotFound from "../../../Error/notFound";

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
				{/* <p>Your content goes here.</p> */}

				<div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6">
					<Routes>
						{/* <Outlet /> */}
						<Route index path="/home" element={<h1>Dashboard</h1>} />
						<Route
							path="/production-quantity-limits"
							element={<h1>Analytics</h1>}
						/>
						<Route path="/open-quantity" element={<h1>Reports</h1>} />
						<Route path="/messages" element={<h1>Customers</h1>} />
						<Route path="/payment" element={<h1>New Customer</h1>} />
						<Route path="/settings" element={<h1>Verified Customers</h1>} />

						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
