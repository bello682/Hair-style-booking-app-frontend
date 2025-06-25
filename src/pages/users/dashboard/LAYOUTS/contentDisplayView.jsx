import React from "react";
import { Outlet } from "react-router-dom";
// import { Routes, Route, Navigate } from "react-router-dom";
import "../../../CSS/userDashboardLayoutView.css";

const ContentDisplayView = () => {
	return (
		<div className="dashboard_main_content_outlet_container_wrap">
			{/* routes */}

			{/* <Routes>
				<Route index element={<DashBoard_main />} />
				<Route
					path="User-profiler-page"
					element={<UserProfileDataTableStored />}
				/>
				<Route path="Customers" element={<h1>Customers</h1>} />
				<Route path="Analytics" element={<h1>Analytics</h1>} />
				<Route path="Messages" element={<h1>Messages</h1>} />
				<Route path="Products" element={<h1>Products</h1>} />
				<Route path="Reports" element={<h1>Reports</h1>} />
				<Route path="Products" element={<h1>Products</h1>} />
				<Route path="settings" element={<h1>settings</h1>} />
				<Route path="AddProducts" element={<h1>AddProducts</h1>} />
				<Route path="Logout" element={<h1>Logout</h1>} />
			</Routes> */}

			{/* they re all replaced with the outlet now but still the main content for the dashboard content view   */}
			{/* <div className="dashboard_main_content"> */}
			<Outlet />
			{/* </div> */}
		</div>
	);
};

export default ContentDisplayView;
