import React, { useState } from "react";
import "../CSS/contactUs.css";
import axios from "axios";
import { error, success } from "../../notifivations/notification";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

const ContactUsPage = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		message: "",
	});

	const [status, setStatus] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const BASE_URL =
		process.env.REACT_APP_BASE_URL || "http://localhost:8006/Api_Url";

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				`${BASE_URL}/HairStyleUsers/contact-us`,
				{
					fullName: formData.fullName,
					email: formData.email,
					message: formData.message,
				}
			);

			if (response.status === 200) {
				success({
					title: "Success",
					msg: response.data,
				});
				setStatus(response.data);
				setFormData({ fullName: "", email: "", message: "" });
			} else {
				error({
					title: "Error",
					msg:
						response?.data?.message ||
						"Failed to send message. Please try again.",
				});
				setStatus("Failed to send message. Please try again.");
			}
		} catch (err) {
			error({
				title: "Error",
				msg:
					err.response?.data?.message || "An error occurred. Please try again.",
			});
			setStatus("An error occurred. Please try again.");
		}
	};

	return (
		<>
			<div className="contact-page">
				<div className="hero-section">
					<div className="hero-text">
						<h1>About Us</h1>
						<p>
							Welcome to <strong>HairStyle Booking App</strong>, your ultimate
							platform for booking professional hair styling services. We
							connect you with top-rated hairstylists for a seamless booking
							experience. Our goal is to ensure you look your best with ease and
							convenience.
						</p>
						<p>
							Whether you need a haircut, coloring, or a stylish updo for an
							event, we've got you covered. Book now to experience a blend of
							professionalism and creativity tailored to your unique style.
						</p>
						<div className="social-icons">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaFacebookF />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<BsTwitterX />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<SiInstagram />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<BsLinkedin />
							</a>
						</div>
					</div>
					<div className="hero-form">
						<h2>Contact Us</h2>
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								name="fullName"
								placeholder="Full Name"
								value={formData.fullName}
								onChange={handleChange}
								required
							/>
							<input
								type="email"
								name="email"
								placeholder="Email Address"
								value={formData.email}
								onChange={handleChange}
								required
							/>
							<textarea
								name="message"
								placeholder="Your Message"
								value={formData.message}
								onChange={handleChange}
								required
							/>
							<button type="submit">Send Message</button>
						</form>
						{status && <p className="status-message">{status}</p>}
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUsPage;
