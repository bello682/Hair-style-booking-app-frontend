// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { HiViewGrid } from "react-icons/hi";
// import { IoPersonOutline } from "react-icons/io5";
// import { MdOutlineReceiptLong } from "react-icons/md";
// import { MdInsights } from "react-icons/md";
// import { IoMailOutline } from "react-icons/io5";
// import { MdOutlineInventory } from "react-icons/md";
// import { MdOutlineReportGmailerrorred } from "react-icons/md";
// import { IoSettingsSharp } from "react-icons/io5";
// import { IoAddOutline } from "react-icons/io5";
// import { MdLogout } from "react-icons/md";
// import logo_image from "../../../../asset/images/websiteLogo.png";
// import "../../../CSS/userDashboardLayoutView.css";

// const Dashboard_SideBar = () => {
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);
// 	// toggle the menu
// 	const toggleMenu = () => {
// 		setIsMenuOpen((prev) => !prev);
// 	};

// 	return (
// 		<div className="">
// 			{/* Toggle Icon */}
// 			<div
// 				className="menu_toggle_btn block absolute top-7  p-4"
// 				onClick={toggleMenu}
// 			>
// 				{isMenuOpen ? (
// 					<FaTimes className="text-2xl cursor-pointer" />
// 				) : (
// 					<FaBars className="text-2xl cursor-pointer" />
// 				)}
// 			</div>
// 			{/* Toggle Icon */}
// 			<aside
// 				className={`user_dashboard_sidebar
// 				${isMenuOpen ? "sidebar_show_mobile" : "user_dashboard_sidebar_show_none"}
// 				`}
// 			>
// 				<div className="top_navbar">
// 					<div className="dash_logo">
// 						<img src={logo_image} alt="" />
// 					</div>
// 					<div className="close" id="close_btn" onClick={toggleMenu}>
// 						<FaTimes className="naterial_icons_sharp_close" />
// 					</div>
// 				</div>

// 				<div className="sideBar dash_a dash_h3">
// 					<Link to="/user-dashboard/" className="active">
// 						<HiViewGrid className="span_icon_dash naterial_icons_sharp_grid_view " />
// 						<h3>Dashboard</h3>
// 					</Link>
// 					<Link to="/user-dashboard/Customers" className="">
// 						<IoPersonOutline className="span_icon_dash naterial_icons_sharp_person_outline" />
// 						<h3>Customers</h3>
// 					</Link>
// 					<Link to="/user-dashboard/Analytics">
// 						<MdOutlineReceiptLong className="span_icon_dash naterial_icons_sharp_receipt_long" />
// 						<h3>Orders</h3>
// 					</Link>
// 					<Link to="/user-dashboard/Messages">
// 						<MdInsights className="span_icon_dash naterial_icons_sharp_insight" />
// 						<h3>Analytics</h3>
// 					</Link>
// 					<Link to="/user-dashboard/Products">
// 						<IoMailOutline className="span_icon_dash naterial_icons_sharp_mail_outline" />
// 						<h3>Messages</h3>
// 						<span className="message_counts">26</span>
// 					</Link>
// 					<Link to="/user-dashboard/Reports">
// 						<MdOutlineInventory className="span_icon_dash naterial_icons_sharp_inventory" />
// 						<h3>Products</h3>
// 					</Link>
// 					<Link to="/user-dashboard/Products">
// 						<MdOutlineReportGmailerrorred className="span_icon_dash naterial_icons_sharp_report_gmail_error_red" />
// 						<h3>Reports</h3>
// 					</Link>
// 					<Link to="/user-dashboard/settings">
// 						<IoSettingsSharp className="span_icon_dash naterial_icons_sharp_settings" />
// 						<h3>Settings</h3>
// 					</Link>
// 					<Link to="/user-dashboard/AddProducts">
// 						<IoAddOutline className="span_icon_dash naterial_icons_sharp_add" />
// 						<h3>Add Products</h3>
// 					</Link>
// 					<Link to="/user-dashboard/Logout">
// 						<MdLogout className="span_icon_dash naterial_icons_sharp_grid_view" />
// 						<h3>Logout</h3>
// 					</Link>
// 				</div>
// 			</aside>
// 		</div>
// 	);
// };

// export default Dashboard_SideBar;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineReceiptLong } from "react-icons/md";
import { MdInsights } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineInventory } from "react-icons/md";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import logo_image from "../../../../asset/images/websiteLogo.png";
import "../../../CSS/userDashboardLayoutView.css";

const Dashboard_SideBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// toggle the menu
	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<div className="">
			{/* Toggle Icon */}
			<div
				className="menu_toggle_btn block absolute top-7 text-[black]  p-4"
				onClick={toggleMenu}
			>
				{isMenuOpen ? (
					<FaTimes className="text-2xl cursor-pointer" />
				) : (
					<FaBars className="text-2xl cursor-pointer" />
				)}
			</div>
			{/* Toggle Icon */}
			<aside
				className={`user_dashboard_sidebar
				${isMenuOpen ? "sidebar_show_mobile" : "user_dashboard_sidebar_show_none"}
				`}
			>
				<div className="top_navbar">
					<a href="/" className="dash_logo">
						<img src={logo_image} alt="" />
					</a>
					<div
						className="close text-[black]"
						id="close_btn"
						onClick={toggleMenu}
					>
						<FaTimes className="naterial_icons_sharp_close" />
					</div>
				</div>

				<div className="sideBar dash_a dash_h3">
					<NavLink
						to="/user-dashboard"
						end // this is use becasue all the links are starting with /user-dashboard and we want to make sure that only the exact match will be active and put the active on the current clicked link
						className={({ isActive }) => (isActive ? "active" : "")}
						onClick={() => setIsMenuOpen(false)}
					>
						<HiViewGrid className="span_icon_dash naterial_icons_sharp_grid_view " />
						<h3>Dashboard</h3>
					</NavLink>
					<NavLink
						to="/user-dashboard/Customers"
						className={({ isActive }) => (isActive ? "active" : "")}
						onClick={() => setIsMenuOpen(false)}
					>
						<IoPersonOutline className="span_icon_dash naterial_icons_sharp_person_outline" />
						<h3>Customers</h3>
					</NavLink>
					<NavLink
						to="/user-dashboard/booking/hair-service"
						className={({ isActive }) => (isActive ? "active" : "")}
						onClick={() => setIsMenuOpen(false)}
					>
						<MdOutlineReceiptLong className="span_icon_dash naterial_icons_sharp_receipt_long" />
						<h3>Book Now</h3>
					</NavLink>
					<NavLink
						to="/user-dashboard/Analytics"
						className={({ isActive }) => (isActive ? "active" : "")}
						onClick={() => setIsMenuOpen(false)}
					>
						<MdInsights className="span_icon_dash naterial_icons_sharp_insight" />
						<h3>Analytics</h3>
					</NavLink>
					<NavLink
						to="/user-dashboard/Messages"
						className={({ isActive }) => (isActive ? "active" : "")}
						onClick={() => setIsMenuOpen(false)}
					>
						<IoMailOutline className="span_icon_dash naterial_icons_sharp_mail_outline" />
						<h3>Messages</h3>
						<span className="message_counts">26</span>
					</NavLink>
					<NavLink
						to="/user-dashboard/Products"
						className={({ isActive }) => (isActive ? "active" : "")}
						onClick={() => setIsMenuOpen(false)}
					>
						<MdOutlineInventory className="span_icon_dash naterial_icons_sharp_inventory" />
						<h3>Products</h3>
					</NavLink>
					<NavLink
						to="/user-dashboard/Reports"
						className={({ isActive }) => (isActive ? "active" : "")}
						onClick={() => setIsMenuOpen(false)}
					>
						<MdOutlineReportGmailerrorred className="span_icon_dash naterial_icons_sharp_report_gmail_error_red" />
						<h3>Reports</h3>
					</NavLink>
					<NavLink
						to="/user-dashboard/settings"
						className={({ isActive }) => (isActive ? "active" : "")}
						onClick={() => setIsMenuOpen(false)}
					>
						<IoSettingsSharp className="span_icon_dash naterial_icons_sharp_settings" />
						<h3>Settings</h3>
					</NavLink>
					<NavLink
						to="/user-dashboard/AddProducts"
						className={({ isActive }) => (isActive ? "active" : "")}
						onClick={() => setIsMenuOpen(false)}
					>
						<IoAddOutline className="span_icon_dash naterial_icons_sharp_add" />
						<h3>Add Products</h3>
					</NavLink>
					<NavLink
						to="/user-dashboard/deactivating-user-account?"
						className={({ isActive }) => (isActive ? "active" : "")}
						onClick={() => setIsMenuOpen(false)}
					>
						<MdLogout className="span_icon_dash naterial_icons_sharp_grid_view" />
						<h3>Deactivate Account</h3>
					</NavLink>
				</div>
			</aside>
		</div>
	);
};

export default Dashboard_SideBar;
