import axios from "axios";
import { error, success } from "./../notification";

// Fetch notifications
export const fetchNotifications = async () => {
	const token = localStorage.getItem("token");

	try {
		const response = await axios.get(
			`${process.env.REACT_APP_BASE_URL}/notificationMessages/notifications/get`,
			{
				headers: {
					Authorization: `Bearer ${token}`, // Include the token in the request headers
				},
			}
		);

		return response.data; // Return notifications
	} catch (err) {
		const errorMessage =
			err.response?.data?.message || "Failed to fetch notification, try again";

		error({
			title: "Error",
			msg: errorMessage,
		});
		throw err;
	}
};

// Create a new notification
export const createNotification = async (data) => {
	const token = localStorage.getItem("token");

	try {
		const response = await axios.post(
			`${process.env.REACT_APP_BASE_URL}/notificationMessages/notifications`,
			data,
			{
				headers: {
					Authorization: `Bearer ${token}`, // Include the token in the request headers
				},
			}
		);

		success({
			title: "Success",
			msg: response.data?.message,
		});

		return response.data; // Return the created notification
	} catch (err) {
		const errorMessage =
			err.response?.data?.message || "Failed to fetch notification, try again";

		error({
			title: "Error",
			msg: errorMessage,
		});
		throw err;
	}
};

// Delete a notification
export const deleteNotification = async (id) => {
	const token = localStorage.getItem("token");

	try {
		const response = await axios.delete(
			`${process.env.REACT_APP_BASE_URL}/notificationMessages/notifications/${id}`,
			{
				headers: {
					Authorization: `Bearer ${token}`, // Include the token in the request headers
				},
			}
		);

		success({
			title: "Success",
			msg: response.data?.message || "Notification deleted successfully",
		});

		return response.data; // Return success message
	} catch (err) {
		const errorMessage =
			err.response?.data?.message || "Failed to delete notification, try again";

		error({
			title: "Error",
			msg: errorMessage,
		});

		throw err;
	}
};
