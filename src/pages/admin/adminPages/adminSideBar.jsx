// import React from "react";
// import {
// 	BsCart3,
// 	BsGrid1X2Fill,
// 	BsFillArchiveFill,
// 	BsFillGrid3X3GapFill,
// 	BsPeopleFill,
// 	BsListCheck,
// 	BsMenuButtonWideFill,
// 	BsFillGearFill,
// } from "react-icons/bs";
// import "../../CSS/adminPages.css";

// const AdminSideBar = ({ openSidebarToggle, OpenSidebar }) => {
// 	return (
// 		<aside
// 			id="sidebar"
// 			className={openSidebarToggle ? "sidebar-responsive" : ""}
// 		>
// 			<div className="sidebar-title">
// 				<div className="sidebar-brand">
// 					<BsCart3 className="icon_header" /> SHOP
// 				</div>
// 				<span className="icon close_icon" onClick={OpenSidebar}>
// 					X
// 				</span>
// 			</div>

// 			<ul className="sidebar-list">
// 				<li className="sidebar-list-item">
// 					<a href="">
// 						<BsGrid1X2Fill className="icon" /> Dashboard
// 					</a>
// 				</li>
// 				<li className="sidebar-list-item">
// 					<a href="">
// 						<BsFillArchiveFill className="icon" /> Products
// 					</a>
// 				</li>
// 				<li className="sidebar-list-item">
// 					<a href="">
// 						<BsFillGrid3X3GapFill className="icon" /> Categories
// 					</a>
// 				</li>
// 				<li className="sidebar-list-item">
// 					<a href="">
// 						<BsPeopleFill className="icon" /> Customers
// 					</a>
// 				</li>
// 				<li className="sidebar-list-item">
// 					<a href="">
// 						<BsListCheck className="icon" /> Inventory
// 					</a>
// 				</li>
// 				<li className="sidebar-list-item">
// 					<a href="">
// 						<BsMenuButtonWideFill className="icon" /> Reports
// 					</a>
// 				</li>
// 				<li className="sidebar-list-item">
// 					<a href="">
// 						<BsFillGearFill className="icon" /> Setting
// 					</a>
// 				</li>
// 			</ul>
// 		</aside>
// 	);
// };
// export default AdminSideBar;

import React, { useState } from "react";
import {
	BsCart3,
	BsGrid1X2Fill,
	BsFillArchiveFill,
	BsFillGrid3X3GapFill,
	BsPeopleFill,
	BsListCheck,
	BsMenuButtonWideFill,
	BsFillGearFill,
	BsChevronDown,
} from "react-icons/bs";
import "../../CSS/adminPages.css";
import { useNavigate } from "react-router-dom";
import AdminLogout from "../logoutAdmin";

const AdminSideBar = ({ openSidebarToggle, OpenSidebar }) => {
	const [dropdowns, setDropdowns] = useState({
		newRequests: false,
		requests: false,
		uploads: false,
		notifications: false,
		deleteUser: false,
		postAds: false,
		editAds: false,
	});

	const navigate = useNavigate();

	const toggleDropdown = (dropdown) => {
		setDropdowns((prev) => ({
			...prev,
			[dropdown]: !prev[dropdown],
		}));
	};

	const handleNavigation = () => {
		navigate("/admin-accepted-requests");
	};

	return (
		<aside
			id="sidebar"
			className={openSidebarToggle ? "sidebar-responsive" : ""}
		>
			<div className="sidebar-title">
				<div className="sidebar-brand">
					<BsCart3 className="icon_header" /> SHOP
				</div>
				<span className="icon close_icon" onClick={OpenSidebar}>
					X
				</span>
			</div>

			<ul className="sidebar-list">
				<li className="sidebar-list-item">
					<a href="">
						<BsGrid1X2Fill className="icon" /> Dashboard
					</a>
				</li>

				<li className="sidebar-list-item">
					<div
						className="dropdown-header"
						onClick={() => toggleDropdown("newRequests")}
					>
						<BsFillGearFill className="icon" /> New Request
						<BsChevronDown
							className={`dropdown-icon ${
								dropdowns.newRequests ? "rotate" : ""
							}`}
						/>
					</div>
					{dropdowns.newRequests && (
						<ul className="dropdown-list">
							<li className="dropdown-list-item">
								<a href="/admin-new-requests" target="blank_">
									Request
								</a>
							</li>
						</ul>
					)}
				</li>

				<li className="sidebar-list-item">
					<div
						className="dropdown-header"
						onClick={() => toggleDropdown("requests")}
					>
						<BsFillGearFill className="icon" /> Requests
						<BsChevronDown
							className={`dropdown-icon ${dropdowns.requests ? "rotate" : ""}`}
						/>
					</div>
					{dropdowns.requests && (
						<ul className="dropdown-list">
							<li className="dropdown-list-item">
								<a href="/admin-all-requests" target="blank_">
									All Requests
								</a>
							</li>
							<li className="dropdown-list-item">
								<a href="/admin-accepted-requests" target="blank_">
									Accepted Requests
								</a>
							</li>
							<li className="dropdown-list-item">
								<a href="/admin-completed-requests" target="blank_">
									Completed Requests
								</a>
							</li>
							<li className="dropdown-list-item">
								<a href="/admin-rejected-requests" target="blank_">
									Rejected Requests
								</a>
							</li>
							<li className="dropdown-list-item">
								<a href="/admin-pending-requests" target="blank_">
									Pending Requests
								</a>
							</li>
							<li className="dropdown-list-item">
								<a href="/admin-deleted-requests" target="blank_">
									Deleted Requests
								</a>
							</li>
						</ul>
					)}
				</li>

				<li className="sidebar-list-item">
					<div
						className="dropdown-header"
						onClick={() => toggleDropdown("uploads")}
					>
						<BsFillGrid3X3GapFill className="icon" /> Uploads
						<BsChevronDown
							className={`dropdown-icon ${dropdowns.uploads ? "rotate" : ""}`}
						/>
					</div>
					{dropdowns.uploads && (
						<ul className="dropdown-list">
							<li className="dropdown-list-item">
								<a href="/admin-male-uploads">Male Image</a>
							</li>
							<li className="dropdown-list-item">
								<a href="/admin-female-uploads">Female Image</a>
							</li>
							<li className="dropdown-list-item">
								<a href="/admin-others-uploads">Others</a>
							</li>
						</ul>
					)}
				</li>

				<li className="sidebar-list-item">
					<div
						className="dropdown-header"
						onClick={() => toggleDropdown("notifications")}
					>
						<BsPeopleFill className="icon" /> Notifications
						<BsChevronDown
							className={`dropdown-icon ${
								dropdowns.notifications ? "rotate" : ""
							}`}
						/>
					</div>
					{dropdowns.notifications && (
						<ul className="dropdown-list">
							<li className="dropdown-list-item">
								<a href="/admin-create-notification">Create Message</a>
							</li>
							<li className="dropdown-list-item">
								<a href="/admin-get-notification">View Message</a>
							</li>
						</ul>
					)}
				</li>

				<li className="sidebar-list-item">
					<a href="">
						<BsListCheck className="icon" /> Inventory
					</a>
				</li>

				<li className="sidebar-list-item">
					<div
						className="dropdown-header"
						onClick={() => toggleDropdown("deleteUser")}
					>
						<BsFillArchiveFill className="icon" /> Delete User
						<BsChevronDown
							className={`dropdown-icon ${
								dropdowns.deleteUser ? "rotate" : ""
							}`}
						/>
					</div>
					{dropdowns.deleteUser && (
						<ul className="dropdown-list">
							<li className="dropdown-list-item">
								<a href="">Deletes</a>
							</li>
							<li className="dropdown-list-item">
								<a href="">Rejected Request</a>
							</li>
						</ul>
					)}
				</li>

				<li className="sidebar-list-item">
					<div
						className="dropdown-header"
						onClick={() => toggleDropdown("postAds")}
					>
						<BsMenuButtonWideFill className="icon" /> Post Ads
						<BsChevronDown
							className={`dropdown-icon ${dropdowns.postAds ? "rotate" : ""}`}
						/>
					</div>
					{dropdowns.postAds && (
						<ul className="dropdown-list">
							<li className="dropdown-list-item">
								<a href="">Accepted Request</a>
							</li>
							<li className="dropdown-list-item">
								<a href="">Rejected Request</a>
							</li>
							<li className="dropdown-list-item">
								<a href="">Completed Request</a>
							</li>
							<li className="dropdown-list-item">
								<a href="">Deleted Request</a>
							</li>
							<li className="dropdown-list-item">
								<a href="">Pending Request</a>
							</li>
						</ul>
					)}
				</li>

				<li className="sidebar-list-item">
					<div
						className="dropdown-header"
						onClick={() => toggleDropdown("editAds")}
					>
						<BsFillGearFill className="icon" /> Edit Ads
						<BsChevronDown
							className={`dropdown-icon ${dropdowns.editAds ? "rotate" : ""}`}
						/>
					</div>
					{dropdowns.editAds && (
						<ul className="dropdown-list">
							<li className="dropdown-list-item">
								<a href="">Accepted Request</a>
							</li>
							<li className="dropdown-list-item">
								<a href="">Rejected Request</a>
							</li>
							<li className="dropdown-list-item">
								<a href="">Completed Request</a>
							</li>
							<li className="dropdown-list-item">
								<a href="">Deleted Request</a>
							</li>
							<li className="dropdown-list-item">
								<a href="">Pending Request</a>
							</li>
						</ul>
					)}
				</li>

				<li className="sidebar-list-item">
					<AdminLogout />
				</li>
			</ul>
		</aside>
	);
};

export default AdminSideBar;
