import { useState } from "react";
import "../../CSS/adminPages.css";
import AdminHeader from "../adminPages/adminHeader";
import AdminSideBar from "../adminPages/adminSideBar";
import AdminContentViewDisplay from "./adminContentViewDisplay";

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

			<AdminContentViewDisplay />
		</div>
	);
}

export default Admin_App_Layout;
