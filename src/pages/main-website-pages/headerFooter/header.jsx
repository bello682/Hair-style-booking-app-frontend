// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
// import logo from "../../../../src/asset/images/websiteLogo.png";
// import "../../CSS/homePage.css";

// const HeaderPage = () => {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [activeLink, setActiveLink] = useState("Home");
// 	const isVerified = localStorage.getItem("isVerified");

// 	const toggleMenu = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	// Handle link click and set active state
// 	const handleLinkClick = (link) => {
// 		setActiveLink(link);
// 	};

// 	return (
// 		<div className="main_body">
// 			<header className="home-header-user">
// 				<a href="#">
// 					<img src={logo} alt="Logo" className="Logo_Style" />
// 				</a>
// 				<nav className="navbar">
// 					<a
// 						href="/"
// 						className={activeLink === "Home" ? "active" : ""}
// 						onClick={() => handleLinkClick("Home")}
// 					>
// 						Home
// 					</a>
// 					<a
// 						href="/tour-our-services"
// 						className={activeLink === "Service" ? "active" : ""}
// 						onClick={() => handleLinkClick("Service")}
// 					>
// 						Service
// 					</a>
// 					<a
// 						href="#"
// 						className={activeLink === "Contact Us" ? "active" : ""}
// 						onClick={() => handleLinkClick("Contact Us")}
// 					>
// 						Contact Us
// 					</a>
// 					{isVerified ? (
// 						<button className="button_Header">
// 							<a href="/booking/hair-service">Book Now</a>
// 						</button>
// 					) : (
// 						<button className="button_Header">
// 							<a href="/user-signUp">Sign-Up</a>
// 						</button>
// 					)}
// 				</nav>
// 				<div className="hamburger" onClick={toggleMenu}>
// 					{isOpen ? (
// 						<FaTimes className="closeFaTimes" />
// 					) : (
// 						<FaBars className="openFaBars" />
// 					)}
// 				</div>
// 				<nav className={`navbar-mobile ${isOpen ? "active" : ""}`}>
// 					<a
// 						href="/"
// 						className={activeLink === "Home" ? "active" : ""}
// 						onClick={() => {
// 							handleLinkClick("Home"), toggleMenu();
// 						}}
// 					>
// 						Home
// 					</a>
// 					<a
// 						href="/tour-our-services"
// 						className={activeLink === "Service" ? "active" : ""}
// 						onClick={() => {
// 							handleLinkClick("Service"), toggleMenu();
// 						}}
// 					>
// 						Service
// 					</a>
// 					<a
// 						href="#"
// 						className={activeLink === "Contact Us" ? "active" : ""}
// 						onClick={() => {
// 							handleLinkClick("Contact Us"), toggleMenu();
// 						}}
// 					>
// 						Contact Us
// 					</a>

// 					{isVerified ? (
// 						<button className="button_Header" onClick={toggleMenu}>
// 							<a href="/booking/hair-service">Book Now</a>
// 						</button>
// 					) : (
// 						<button className="button_Header" onClick={toggleMenu}>
// 							<a href="/user-signUp">Sign-Up</a>
// 						</button>
// 					)}
// 				</nav>
// 			</header>
// 		</div>
// 	);
// };

// export default HeaderPage;

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom"; // For getting the current URL
import logo from "../../../../src/asset/images/websiteLogo.png";
import "../../CSS/homePage.css";

const HeaderPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("");
	const isVerified = localStorage.getItem("isVerified");
	const location = useLocation(); // Get current location

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	// Update the active link based on the current URL
	useEffect(() => {
		const path = location.pathname;
		if (path === "/") setActiveLink("Home");
		else if (path === "/tour-our-services") setActiveLink("Service");
		else if (path === "/user-signUp" || path === "/booking/hair-service")
			setActiveLink("Booking");
		else setActiveLink(""); // Default or fallback
	}, [location]);

	// Handle link click
	const handleLinkClick = (link) => {
		setActiveLink(link);
		setIsOpen(false); // Close menu on mobile after clicking a link
	};

	return (
		<div className="main_body">
			<header className="home-header-user">
				<a href="/">
					<img src={logo} alt="Logo" className="Logo_Style" />
				</a>
				<nav className="navbar">
					<a
						href="/"
						className={activeLink === "Home" ? "active" : ""}
						onClick={() => handleLinkClick("Home")}
					>
						Home
					</a>
					<a
						href="/tour-our-services"
						className={activeLink === "Service" ? "active" : ""}
						onClick={() => handleLinkClick("Service")}
					>
						Service
					</a>
					<a
						href="#"
						className={activeLink === "Contact Us" ? "active" : ""}
						onClick={() => handleLinkClick("Contact Us")}
					>
						Contact Us
					</a>
					{isVerified ? (
						<button className="button_Header">
							<a href="/booking/hair-service">Book Now</a>
						</button>
					) : (
						<button className="button_Header">
							<a href="/user-signUp">Sign-Up</a>
						</button>
					)}
				</nav>
				<div className="hamburger" onClick={toggleMenu}>
					{isOpen ? (
						<FaTimes className="closeFaTimes" />
					) : (
						<FaBars className="openFaBars" />
					)}
				</div>
				<nav className={`navbar-mobile ${isOpen ? "active" : ""}`}>
					<a
						href="/"
						className={activeLink === "Home" ? "active" : ""}
						onClick={() => handleLinkClick("Home")}
					>
						Home
					</a>
					<a
						href="/tour-our-services"
						className={activeLink === "Service" ? "active" : ""}
						onClick={() => handleLinkClick("Service")}
					>
						Service
					</a>
					<a
						href="#"
						className={activeLink === "Contact Us" ? "active" : ""}
						onClick={() => handleLinkClick("Contact Us")}
					>
						Contact Us
					</a>
					{isVerified ? (
						<button
							className="button_Header"
							onClick={() => handleLinkClick("Booking")}
						>
							<a href="/booking/hair-service">Book Now</a>
						</button>
					) : (
						<button
							className="button_Header"
							onClick={() => handleLinkClick("Sign-Up")}
						>
							<a href="/user-signUp">Sign-Up</a>
						</button>
					)}
				</nav>
			</header>
		</div>
	);
};

export default HeaderPage;
