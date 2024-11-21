import React, { useState } from "react";
import { createNotification } from "../../../../notifivations/adminNotificationDATA/notificationDataServices";
import "../../../CSS/adminCreateNotificationForm.css";

const AdminCreateNotificationForm = () => {
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");
	const [type, setType] = useState("");
	const [status, setStatus] = useState("");
	const [errors, setErrors] = useState({}); // To store validation errors

	// Validation for individual fields
	const validateField = (name, value) => {
		let error = "";
		switch (name) {
			case "title":
				if (!value.trim()) error = "Title is required.";
				break;
			case "message":
				if (!value.trim()) error = "Message is required.";
				break;
			case "type":
				if (!value) error = "Please select a notification type.";
				break;
			default:
				break;
		}
		return error;
	};

	// Validate entire form
	const validateForm = () => {
		return {
			title: validateField("title", title),
			message: validateField("message", message),
			type: validateField("type", type),
		};
	};

	const handleFieldBlur = (name, value) => {
		// Validate field on blur and update errors state
		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: validateField(name, value),
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate all fields before submission
		const validationErrors = validateForm();
		if (Object.values(validationErrors).some((error) => error)) {
			setErrors(validationErrors);
			return;
		}

		try {
			await createNotification({ title, message, type });
			setStatus("Notification sent successfully!");
			setTitle("");
			setMessage("");
			setType("");
			setErrors({});
		} catch (error) {
			setStatus("Failed to send notification.");
		}
	};

	return (
		<div className="notification-form-container">
			<h2 className="form-title">Create Notification</h2>
			<form onSubmit={handleSubmit} className="notification-form">
				<div className="form-group">
					<label className="form-label">Title:</label>
					<input
						type="text"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
							handleFieldBlur("title", e.target.value); // Live validation
						}}
						onBlur={(e) => handleFieldBlur("title", e.target.value)} // Validate on blur
						className={`form-input ${errors.title ? "input-error" : ""}`}
					/>
					{errors.title && <p className="error-message">{errors.title}</p>}
				</div>
				<div className="form-group">
					<label className="form-label">Message:</label>
					<textarea
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
							handleFieldBlur("message", e.target.value); // Live validation
						}}
						onBlur={(e) => handleFieldBlur("message", e.target.value)} // Validate on blur
						className={`form-textarea ${errors.message ? "input-error" : ""}`}
					></textarea>
					{errors.message && <p className="error-message">{errors.message}</p>}
				</div>
				<div className="form-group">
					<label htmlFor="notification-type" className="form-label">
						Type:
					</label>
					<select
						id="notification-type"
						value={type}
						onChange={(e) => {
							setType(e.target.value);
							handleFieldBlur("type", e.target.value); // Live validation
						}}
						onBlur={(e) => handleFieldBlur("type", e.target.value)} // Validate on blur
						className={`form-select ${errors.type ? "input-error" : ""}`}
					>
						<option value="" disabled>
							Select type
						</option>
						<option value="alert">Alert</option>
						<option value="warning">Warning</option>
						<option value="success">Success</option>
						<option value="promo">Promo</option>
					</select>
					{errors.type && <p className="error-message">{errors.type}</p>}
				</div>

				<button type="submit" className="form-submit-btn">
					Send Notification
				</button>
			</form>
			{status && (
				<p
					className={`status-message ${
						status.includes("successfully") ? "success" : "error"
					}`}
				>
					{status}
				</p>
			)}
		</div>
	);
};

export default AdminCreateNotificationForm;
