import React, { useState, useEffect } from "react";
import "../CSS/homePage.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import image1 from "../../../src/asset/images/images1.jpg";
import image2 from "../../../src/asset/images/image 2.jpg";
import image3 from "../../../src/asset/images/image 3.jpg";
import image4 from "../../../src/asset/images/images 4.jpg";
import image5 from "../../../src/asset/images/image 5.jpg";
import Carousel from "../../components/Carousel";
import { useNavigate } from "react-router-dom";
import { getUserDataStart } from "../../store/action/userActions/get UserDataActions";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const { userDataFectched } = useSelector((state) => state.getUserDataFetch);
	const isVerified = userDataFectched?.user?.isVerified;
	const isVerified2 = localStorage.getItem("isVerified");

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		dispatch(getUserDataStart());
	}, []);

	const services_text = [
		{
			name: "Welcome! We’re here to simplify life for you",
			description:
				"Streamline your bookings with ease! Our app lets you schedule services in just a few taps—whether it’s a salon visit, repairs, or professional help. Save time, stay organized, and enjoy a hassle-free experience tailored to your schedule. Simplify your life today!",
			plug: "Your Ultimate Booking Solution",
		},
		{
			name: "Quality Service Guaranteed",
			description:
				"Get the best service tailored to your needs, from start to finish. We're here to ensure every booking is exactly what you wanted and more. No more waiting or worrying!",
			plug: "Experience the Difference",
		},
		{
			name: "Easy Booking, Anytime, Anywhere",
			description:
				"With our app, scheduling appointments has never been this easy. Whether you're on the go or at home, you can book your favorite services in seconds.",
			plug: "Convenience at Your Fingertips",
		},
	];

	const images = [image1, image2, image3, image4, image5];

	// Update text every 1 minute (60,000 milliseconds)
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTextIndex((prevIndex) =>
				prevIndex === services_text.length - 1 ? 0 : prevIndex + 1
			);
		}, 60000);

		// Clear the interval on component unmount
		return () => clearInterval(interval);
	}, [services_text.length]);

	const text = services_text[currentTextIndex];

	return (
		<div className="main_body_home">
			<div>
				<section className="home_View">
					<div className="home_view_sub">
						<div className="home_content">
							<h1>{text.name}</h1>
							<h3>{text.plug}</h3>
							<p>{text.description}</p>
						</div>

						<div className="btn_box">
							<a href="/tour-our-services">Take a Tour</a>
							{isVerified2 ? (
								<a href="/booking/hair-service">Book Now</a>
							) : (
								<a href="/user-signUp">Sign-Up</a>
							)}
						</div>

						<div className="home_sci">
							<a href="">
								<FaFacebookF className="facebook" />
							</a>
							<a href="">
								<FaTwitter className="twitter" />
							</a>
							<a href="">
								<BsLinkedin className="linkedin" />
							</a>
						</div>
					</div>
					{/* slider */}
					<div className="slider_general_wrapper">
						<Carousel images={images} className_custom={""} />
					</div>
					{/* <span className="home_hover"></span> */}
				</section>
			</div>
		</div>
	);
};

export default HomePage;
