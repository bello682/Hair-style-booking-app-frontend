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

import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { FaRegMessage } from "react-icons/fa6";
import { IoLogoDesignernews } from "react-icons/io5";
import "../../CSS/adminPages.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AdminLogout from "../logoutAdmin";
import { fetchAllRequests } from "../../../store/action/adminActions/fetchAllBookingRequest";

const AdminSideBar = ({ openSidebarToggle, OpenSidebar }) => {
	const dispatch = useDispatch();
	const [dropdowns, setDropdowns] = useState({
		newRequests: false,
		requests: false,
		uploads: false,
		notifications: false,
		deleteUser: false,
		postAds: false,
		editAds: false,
	});

	// ====================================== update count ==========================================
	const { bookings, loading, error } = useSelector(
		(state) => state.fetchBookings
	);

	const newRequestCount =
		bookings?.users?.reduce((total, user) => {
			if (!user.bookingRequests) return total;

			const userNewRequests = user.bookingRequests.filter(
				(req) => req.status === "pending" && req.isNewRequest === true
			);

			return total + userNewRequests.length;
		}, 0) || 0;

	// making sure to  always check for the count all the time if there is a new request so it will update the count
	useEffect(() => {
		dispatch(fetchAllRequests());

		const interval = setInterval(() => {
			dispatch(fetchAllRequests());
		}, 10000); // every 10 seconds

		return () => clearInterval(interval); // cleanup
	}, [dispatch]);

	// ====================================== update count ==========================================

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
			className={`
				${openSidebarToggle ? "sidebar-responsive" : ""}
			
			`}
		>
			<div className="sidebar-title lg:w-[15rem]">
				<div className="sidebar-brand">
					<IoLogoDesignernews className="icon_header text-[#d50000] text-[30px]" />
					<p>Esta</p>
					<p>blish Brand</p>
				</div>
				<span className="icon close_icon" onClick={OpenSidebar}>
					X
				</span>
			</div>

			<ul className="sidebar-list">
				<li className="sidebar-list-item">
					<NavLink
						to="/admin-dashboard"
						// className=" "
						className={`flex items-center w-full gap-7 ${({ isActive }) =>
							isActive ? "activeLink" : ""}`}
					>
						<BsGrid1X2Fill className="" /> Dashboard
					</NavLink>
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
							<li className="dropdown-list-item flex justify-center items-center gap-5 text-white">
								<NavLink to="/admin-dashboard/admin-new-requests">
									Request
								</NavLink>
								<div className="message-chat-count bg-[red] text-white rounded-md px-2">
									<p className="text-white font-extrabold">{newRequestCount}</p>
								</div>
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
								<NavLink to="/admin-dashboard/admin-all-requests">
									All Requests
								</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/admin-accepted-requests">
									Accepted Requests
								</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/admin-completed-requests">
									Completed Requests
								</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/admin-rejected-requests">
									Rejected Requests
								</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/admin-pending-requests">
									Pending Requests
								</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/admin-deleted-requests">
									Deleted Requests
								</NavLink>
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
								<NavLink to="/admin-dashboard/admin-male-uploads">
									Male Image
								</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/admin-female-uploads">
									Female Image
								</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/admin-others-uploads">
									Others
								</NavLink>
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
								<NavLink to="/admin-dashboard/admin-create-notification">
									Create Message
								</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/admin-get-notification">
									View Message
								</NavLink>
							</li>
						</ul>
					)}
				</li>

				<li className="sidebar-list-item">
					<NavLink
						to="/admin-dashboard/"
						className="flex items-center w-full gap-7 "
					>
						<BsListCheck className="icon" /> Inventory
					</NavLink>
				</li>
				<li className="sidebar-list-item flex justify-between items-center">
					<NavLink
						to="/admin-dashboard/"
						className="flex items-center w-full gap-7 "
					>
						<FaRegMessage className="icon" /> Messages
					</NavLink>
					<div className="message-chat-count bg-[red] text-white rounded-full px-2">
						<p className="text-white font-extrabold">20</p>
					</div>
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
								<NavLink to="/admin-dashboard/">Deletes</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/">Rejected Request</NavLink>
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
								<NavLink to="/admin-dashboard/">Accepted Request</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/">Rejected Request</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/">Completed Request</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/">Deleted Request</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/">Pending Request</NavLink>
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
								<NavLink to="/admin-dashboard/">Accepted Request</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/">Rejected Request</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/">Completed Request</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/">Deleted Request</NavLink>
							</li>
							<li className="dropdown-list-item">
								<NavLink to="/admin-dashboard/">Pending Request</NavLink>
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
