// Sidebar.js
import React from "react";
import "../../../CSS/userSideBar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
	return (
		<div className={`sidebar ${isOpen ? "open" : ""}`}>
			<button className="close-btn" onClick={toggleSidebar}>
				&times;
			</button>
			<nav>
				<ul>
					<li>
						<a href="#dashboard">Dashboard</a>
					</li>
					<li>
						<a href="#profile">Profile</a>
					</li>
					<li>
						<a href="#settings">Settings</a>
					</li>
					<li>
						<a href="#logout">Logout</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
