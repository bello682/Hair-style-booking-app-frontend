import React, { useEffect, useState } from "react";
import "../../../CSS/adminNotificationList.css";
import {
	fetchNotifications,
	deleteNotification,
} from "./../../../../notifivations/adminNotificationDATA/notificationDataServices";
import { AiOutlineWarning } from "react-icons/ai";
import { FiGift } from "react-icons/fi";
import { MdCheckCircle } from "react-icons/md";
import { BiError } from "react-icons/bi";

const AdminNotificationList = () => {
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

	const handleDelete = async (id) => {
		try {
			await deleteNotification(id);
			setNotifications((prev) =>
				prev.filter((notification) => notification._id !== id)
			);
		} catch (err) {
			setError("Failed to delete notification");
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
		<div className="admin-notification-container">
			<h2 className="admin-notification-header">Admin Notifications</h2>
			{error && <p className="admin-notification-error">{error}</p>}
			<ul className="admin-notification-list">
				{notifications.map((notification) => (
					<li
						key={notification._id}
						className={`admin-notification-item admin-notification-${notification.type}`}
					>
						<div className="admin-notification-content">
							<h3 className="admin-notification-title">
								{" "}
								{getNotificationIcon(notification.type)}
								{notification.title}
							</h3>
							<p className="admin-notification-message">
								{notification.message}
							</p>
						</div>
						<button
							className="admin-notification-close-btn"
							onClick={() => handleDelete(notification._id)}
						>
							Delete Notification
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AdminNotificationList;
