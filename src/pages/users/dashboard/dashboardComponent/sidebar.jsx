import React, { useState } from "react";
// import {
// 	AiOutlineMenu,
// 	AiOutlineClose,
// 	AiFillHome,
// 	AiFillSetting,
import { FaArrowRight } from "react-icons/fa6";
import { AiFillFileText } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
// import { LuPackageOpenQuantity } from "react-icons/lu";
import { Link, Route, Routes } from "react-router-dom";

const Sidebar = () => {
	const navigationItems = [
		{ name: "Home", icon: <MdHome />, path: "home" },
		{
			name: "Production Quantity",
			icon: <MdProductionQuantityLimits />,
			path: "/production-quantity-limits",
		},
		{
			name: "Open Quantity",
			icon: <AiFillFileText />,
			path: "/open-quantity",
		},
		{ name: "Messages", icon: <FaMessage />, path: "/messages" },
		{ name: "Payment", icon: <MdOutlinePayment />, path: "/payment" },
		{ name: "Settings", icon: <IoIosSettings />, path: "/settings" },
	];

	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div
			className={`${
				!nav ? "w-[300px]" : "w-20"
			} h-screen bg-[transparent]  border-r-2 border-r-[#00abf0] relative duration-300`}
		>
			{" "}
			{/**bg-blue-950 / bg-[#00abf0] */}
			<div
				onClick={handleNav}
				className={`text-white bg-gray-600 border border-gray-500 w-12 h-12 flex items-center justify-center text-xl rounded-full absolute top-4 right-[-25px] ${
					nav ? "rotate-0" : "-rotate-180"
				}`}
			>
				<FaArrowRight />
			</div>
			<div className="flex items-center text-2xl gap-4 p-2 text-gray-300 border-b border-gray-500 font-semibold">
				<MdDashboard />
				<h1 className={`${nav ? "hidden" : "flex"}`}>Dashboard</h1>
			</div>
			<div className="mt-6">
				<ul className="text-gray-700 flex flex-col gap-8 p-2">
					{navigationItems.map((item, index) => (
						<li
							key={index}
							className="flex gap-4 items-center text-lg hover:bg-gray-300 p-2 rounded-md cursor-pointer"
						>
							{/* <Link
								to={item.path}
								className="flex items-center gap-4 p-2 text-gray-300 hover:bg-gray-700 "
							> */}
							{item.icon}
							<span className={`${nav ? "hidden" : "flex"}`}>{item.name}</span>
							{/* </Link> */}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
