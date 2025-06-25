import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // For getting the current URL
import logo from "../../../../src/asset/images/websiteLogo.png";
import "../../CSS/homePage.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataStart } from "../../../store/action/userActions/get UserDataActions";
import ImageProfile from "../../../asset/images/cut3.jpg";

const HeaderPage = () => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("");
	const location = useLocation(); // Get current location
	const { userDataFectched } = useSelector((state) => state.getUserDataFetch);
	const isVerified = userDataFectched?.user?.isVerified;

	const isVerified2 = localStorage.getItem("isVerified");

	useEffect(() => {
		if (!isVerified) {
			localStorage.removeItem("isVerified");

			// if the user is verified and exist in the database then the accesstoken, refreshtoken, device ID and user ID should be removed from the local storage but if they re then the local storage should have them.
		}
	}, [isVerified]);

	useEffect(() => {
		dispatch(getUserDataStart());
	}, [dispatch]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	// Update the active link based on the current URL
	useEffect(() => {
		const path = location.pathname;
		if (path === "/") setActiveLink("Home");
		else if (path === "/tour-our-services") setActiveLink("Service");
		else if (path === "/contact-us") setActiveLink("Contact Us");
		// else if (path === "/user-signUp" || path === "/booking/hair-service")
		else if (path === "/user-signUp" || path === "/user-dashboard")
			setActiveLink("Booking");
		else setActiveLink(""); // Default or fallback
	}, [location]);

	// Handle link click
	const handleLinkClick = (link) => {
		setActiveLink(link);
		setIsOpen(false); // Close menu on mobile after clicking a link
	};

	// Example to get the first letter of the first name and capitalize it
	let FULL_NAME = userDataFectched?.user?.fullName;
	let firstLetter = FULL_NAME
		? FULL_NAME.trim().split(" ")[0][0].toUpperCase()
		: "";

	return (
		<div className="main_body">
			<header className="home-header-user">
				<Link to="/">
					<img src={logo} alt="Logo" className="Logo_Style" />
				</Link>
				<nav className="navbar">
					<Link
						to="/"
						className={activeLink === "Home" ? "active" : ""}
						onClick={() => handleLinkClick("Home")}
					>
						Home
					</Link>
					<Link
						to="/tour-our-services"
						className={activeLink === "Service" ? "active" : ""}
						onClick={() => handleLinkClick("Service")}
					>
						Service
					</Link>
					<Link
						to="/contact-us"
						className={activeLink === "Contact Us" ? "active" : ""}
						onClick={() => handleLinkClick("Contact Us")}
					>
						Contact Us
					</Link>
					{isVerified ? (
						// <button className="button_Header">
						// 	<Link to="/booking/hair-service">Book Now</Link>
						// </button>

						<Link to="/user-dashboard">
							{" "}
							<div className="profile_photo_pics_name_ profile__pics_name">
								{/* <img src={ImageProfile} alt="profile" /> */}
								<p>{firstLetter}</p>
							</div>
						</Link>
					) : (
						<button className="button_Header">
							{/* <Link to="/user-signUp">Sign-Up</Link> */}
							<Link to="/user-signUp">Join Us</Link>
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
				<nav className={`navbar-mobile relative ${isOpen ? "active" : ""}`}>
					<div className="hamburger p-5" onClick={toggleMenu}>
						{isOpen ? (
							<FaTimes className="closeFaTimes text-[30px] mb-11" />
						) : (
							<FaBars className="openFaBars" />
						)}
					</div>

					<Link
						to="/"
						className={activeLink === "Home" ? "active" : ""}
						onClick={() => handleLinkClick("Home")}
					>
						Home
					</Link>
					<Link
						to="/tour-our-services"
						className={activeLink === "Service" ? "active" : ""}
						onClick={() => handleLinkClick("Service")}
					>
						Service
					</Link>
					<Link
						to="/contact-us"
						className={activeLink === "Contact Us" ? "active" : ""}
						onClick={() => handleLinkClick("Contact Us")}
					>
						Contact Us
					</Link>
					{isVerified ? (
						// <button
						// 	className="button_Header"
						// 	onClick={() => handleLinkClick("Booking")}
						// >
						// 	<Link to="/booking/hair-service">Book Now</Link>
						// </button>
						<Link
							to="/user-dashboard"
							className="absolute right-6 top-4"
							onClick={() => handleLinkClick("Booking")}
						>
							{" "}
							<div className="profile_photo_pics_name_ profile__pics_name">
								{/* <img src={ImageProfile} alt="profile" /> */}
								<p>{firstLetter}</p>
							</div>
						</Link>
					) : (
						<button
							className="button_Header"
							onClick={() => handleLinkClick("Sign-Up")}
						>
							{/* <Link to="/user-signUp">Sign-Up</Link> */}
							<Link to="/user-signUp">Join-Us</Link>
						</button>
					)}
				</nav>
			</header>
		</div>
	);
};

export default HeaderPage;
