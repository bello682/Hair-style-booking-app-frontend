import React from "react";
import {
	BsFillBellFill,
	BsFillEnvelopeFill,
	BsPersonCircle,
	BsSearch,
	BsJustify,
} from "react-icons/bs";
import "../../CSS/adminPages.css";

const AdminHeader = ({ OpenSidebar }) => {
	return (
		<header className="header">
			<div className="menu-icon">
				<BsJustify className="icon" onClick={OpenSidebar} />
			</div>
			<div className="header-left">
				<BsSearch className="icon" />
			</div>
			<div className="header-right flex justify-center items-center gap-4">
				<BsFillBellFill className="icon" />
				<BsFillEnvelopeFill className="icon" />
				<BsPersonCircle className="icon" />
			</div>
		</header>
	);
};

export default AdminHeader;
