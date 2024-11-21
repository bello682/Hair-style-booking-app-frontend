import React, { useEffect, useState } from "react";
import { fetchNotifications } from "./../../../notifivations/adminNotificationDATA/notificationDataServices";
import "../../CSS/adminCreateNotificationForm.css"; // Add your CSS styles here
import { AiOutlineWarning } from "react-icons/ai";
import { FiGift } from "react-icons/fi";
import { MdCheckCircle } from "react-icons/md";
import { BiError } from "react-icons/bi";

const NotificationList = () => {
	const [notifications, setNotifications] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const getNotifications = async () => {
			try {
				const data = await fetchNotifications();
				setNotifications(data);
			} catch (err) {
				setError("Failed to load notifications");
			}
		};

		getNotifications();
	}, []);

	// Remove notification from the list
	const handleClose = (id) => {
		setNotifications(
			notifications.filter((notification) => notification._id !== id)
		);
	};

	// Get styles for notification based on type
	const getNotificationStyle = (type) => {
		switch (type) {
			case "alert":
				return { backgroundColor: "#f8d7da", color: "#721c24" }; // Red
			case "warning":
				return { backgroundColor: "#fff3cd", color: "#856404" }; // Yellow
			case "success":
				return { backgroundColor: "#d4edda", color: "#155724" }; // Green
			case "promo":
				return { backgroundColor: "#cce5ff", color: "#004085" }; // Blue
			default:
				return { backgroundColor: "#f8f9fa", color: "#212529" }; // Default
		}
	};

	const getNotificationIcon = (type) => {
		switch (type) {
			case "alert":
				return <BiError style={{ fontSize: "1.5rem", color: "#721c24" }} />;
			case "warning":
				return (
					<AiOutlineWarning style={{ fontSize: "1.5rem", color: "#856404" }} />
				);
			case "success":
				return (
					<MdCheckCircle style={{ fontSize: "1.5rem", color: "#155724" }} />
				);
			case "promo":
				return <FiGift style={{ fontSize: "1.5rem", color: "#0c5460" }} />;
			default:
				return null;
		}
	};

	return (
		<div style={{ marginTop: "3rem" }}>
			{/* <h2>Notifications</h2> */}
			{error && <p style={{ color: "red" }}>{error}</p>}
			<ul className="notification-list">
				{notifications.map((notification) => (
					<li
						key={notification._id}
						className="notification-item"
						style={getNotificationStyle(notification.type)}
					>
						<div className="notification-content">
							<h3 className="notification-title">
								{" "}
								{getNotificationIcon(notification.type)}
								{notification.title} :
							</h3>
							<p className="notification-message">{notification.message}</p>
							{/* <small className="notification-date">
								{new Date(notification.createdAt).toLocaleString()}
							</small> */}
						</div>
						<button
							className="notification-close-btn"
							onClick={() => handleClose(notification._id)}
						>
							&times;
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NotificationList;
