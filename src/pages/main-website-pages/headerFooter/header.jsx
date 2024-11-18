import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import logo from "../../../../src/asset/images/websiteLogo.png";
import "../../CSS/homePage.css";

const HeaderPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const isVerified = localStorage.getItem("isVerified");

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="main_body">
			<header className="home-header-user">
				<a href="#">
					<img src={logo} alt="Logo" className="Logo_Style" />
				</a>
				<nav className="navbar">
					<a href="/" className="active">
						Home
					</a>
					<a href="/tour-our-services" className="">
						Service
					</a>
					<a href="#" className="">
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
					{isOpen ? <FaTimes /> : <FaBars />}
				</div>
				<nav className={`navbar-mobile ${isOpen ? "active" : ""}`}>
					<a href="#" className="active">
						Home
					</a>
					<a href="#" onClick={toggleMenu}>
						Service
					</a>
					<a href="#" onClick={toggleMenu}>
						Contact Us
					</a>

					{isVerified ? (
						<button className="button_Header" onClick={toggleMenu}>
							<a href="/booking/hair-service">Book Now</a>
						</button>
					) : (
						<button className="button_Header" onClick={toggleMenu}>
							<a href="/user-signUp">Sign-Up</a>
						</button>
					)}
				</nav>
			</header>
		</div>
	);
};

export default HeaderPage;
