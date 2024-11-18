import { useState } from "react";
import "../../CSS/adminPages.css";
import AdminHeader from "../adminPages/adminHeader";
import AdminHomePage from "../adminPages/adminHomePage";
import AdminSideBar from "../adminPages/adminSideBar";
import { Routes, Route } from "react-router-dom";
import AcceptedRequest from "./admin-actions-pages/acceptedRequest";
import AllRequest from "./admin-actions-pages/allRequest";
import CompletedRequest from "./admin-actions-pages/completedRequest";
import RejectedRequest from "./admin-actions-pages/rejectedRequest";
import PendingRequest from "./admin-actions-pages/pendingRequest";
import DeletedRequest from "./admin-actions-pages/deletedRequest";

function Admin_App_Layout() {
	const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

	const OpenSidebar = () => {
		setOpenSidebarToggle(!openSidebarToggle);
	};

	return (
		<div className="grid-container">
			<AdminHeader OpenSidebar={OpenSidebar} />
			<AdminSideBar
				openSidebarToggle={openSidebarToggle}
				OpenSidebar={OpenSidebar}
			/>
			<AdminHomePage />
			{/* <AllRequest />
			<AcceptedRequest />
			<CompletedRequest />
			<RejectedRequest />
			<PendingRequest />
			<DeletedRequest /> */}
		</div>
	);
}

export default Admin_App_Layout;

// import { useState } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import "../../CSS/adminPages.css";
// import AdminHeader from "../adminPages/adminHeader";
// import AdminHomePage from "../adminPages/adminHomePage";
// import AdminSideBar from "../adminPages/adminSideBar";
// import AcceptedRequest from "./admin-actions-pages/acceptedRequest";
// import AllRequest from "./admin-actions-pages/allRequest";
// import CompletedRequest from "./admin-actions-pages/completedRequest";
// import RejectedRequest from "./admin-actions-pages/rejectedRequest";
// import PendingRequest from "./admin-actions-pages/pendingRequest";
// import DeletedRequest from "./admin-actions-pages/deletedRequest";

// function Admin_App_Layout() {
// 	const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

// 	const OpenSidebar = () => {
// 		setOpenSidebarToggle(!openSidebarToggle);
// 	};

// 	return (
// 		<div className="grid-container">
// 			<AdminHeader OpenSidebar={OpenSidebar} />
// 			<AdminSideBar
// 				openSidebarToggle={openSidebarToggle}
// 				OpenSidebar={OpenSidebar}
// 			/>
// 			<main>
// 				<Routes>
// 					<Route path="/" element={<AdminHomePage />} />
// 					<Route path="/admin-all-requests" element={<AllRequest />} />
// 					<Route
// 						path="/admin-accepted-requests"
// 						element={<AcceptedRequest />}
// 					/>
// 					<Route
// 						path="/admin-completed-requests"
// 						element={<CompletedRequest />}
// 					/>
// 					<Route
// 						path="/admin-rejected-requests"
// 						element={<RejectedRequest />}
// 					/>
// 					<Route path="/admin-pending-requests" element={<PendingRequest />} />
// 					<Route path="/admin-deleted-requests" element={<DeletedRequest />} />
// 				</Routes>
// 			</main>
// 		</div>
// 	);
// }

// export default Admin_App_Layout;
