import React, { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaBars, FaTimes } from "react-icons/fa";
import Dashboard_SideBar from "./dashboard_SideBar";
import DashBoard_Right_Blog from "./dashboard_right_blog";
import "../../../CSS/userDashboardLayoutView.css";
import ContentDisplayView from "./contentDisplayView";

const User_dashboard_layout = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// toggle the menu
	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<div className="dashboard_container">
			{/* toggle buttonfor the sidebar */}
			<Dashboard_SideBar />
			<ContentDisplayView />

			{/* Toggle Icon */}
			<div
				className="toggle_menu_icon absolute top-16 lg:top-10 right-8 text-[black]  cursor-pointer"
				onClick={toggleMenu}
			>
				{isMenuOpen ? (
					// <FaTimes className="text-xl material_icons_sharp_span_menu" />
					""
				) : (
					<HiMiniBars3BottomRight className="text-2xl font-extrabold material_icons_sharp_span_menu" />
				)}
			</div>

			{isMenuOpen && <DashBoard_Right_Blog onClose={toggleMenu} />}
		</div>
	);
};

export default User_dashboard_layout;
