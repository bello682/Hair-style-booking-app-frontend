import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { bookHairService } from "../../store/action/userActions/userBookingHairRequest";
import "../CSS/bookingForm.css";
import GlobalImageModal from "./../../components/webImagesToSelect";
import NotificationList from "./getNotifications/getNotifications";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedImages, setSelectedImages] = useState([]);
	const {
		loading,
		booking: { booking },
		error,
	} = useSelector((state) => state.bookingRquestState);

	const validationSchema = Yup.object({
		imageSource: Yup.string().required("Select an image source"),
		hairStyleName: Yup.string().required("Hair style name is required"),
		serviceType: Yup.string().required("Service type is required"),
		serviceDate: Yup.date().required("Service date is required"),
		serviceTime: Yup.string().required("Service time is required"),
		description: Yup.string()
			.required("Description can not be empty")
			.max(500, "Description too long"),
	});

	const initialValues = {
		imageSource: "",
		hairStyleImages: [],
		hairStyleName: "",
		serviceType: "",
		serviceDate: "",
		serviceTime: "",
		description: "",
	};

	const handleImageSelection = (files) => {
		const imagePreviews = Array.from(files).map((file) => ({
			file,
			url: URL.createObjectURL(file),
		}));
		setSelectedImages((prev) => [...prev, ...imagePreviews]);
	};

	const handleRemoveImage = (index) => {
		setSelectedImages((prev) => prev.filter((_, i) => i !== index));
	};

	const handleSubmit = (values) => {
		const formData = new FormData();

		// Append uploaded files
		selectedImages.forEach(({ file, url }) => {
			if (file) {
				formData.append("hairStyleImages", file); // Add file directly
			} else if (url) {
				formData.append("hairStyleImages", url); // Add URL directly under the same key
			}
		});

		const webImageUrls = selectedImages
			.filter(({ file }) => !file) // Include only web images (no files)
			.map(({ url }) => url);

		formData.append("webImageUrls", JSON.stringify(webImageUrls));

		// Add other form fields to FormData
		Object.keys(values).forEach((key) => {
			if (key !== "imageSource") {
				formData.append(key, values[key]);
			}
		});

		dispatch(bookHairService(formData));
	};

	// When web image is selected in modal
	const handleWebImageSelection = (image) => {
		setSelectedImages((prev) => [
			...prev,
			{ url: image.imageUrl, file: null }, // Add web URL to selectedImages
		]);
	};

	useEffect(() => {
		if (booking) {
			navigate("/booking-receipt");
		}
	}, [booking]);

	return (
		<>
			<div className="h1_title_booking">
				<h1>Fill in your Booking Information</h1>
				<NotificationList />
			</div>
			<div className="booking-container">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ setFieldValue }) => (
						<Form className="booking-form">
							{/* Image Source Selection */}
							<div className="form_group_div">
								<label>Image Source</label>
								<Field
									as="select"
									name="imageSource"
									className="form_control_Input ImageSource__select__image"
									onChange={(e) => {
										const value = e.target.value;
										setFieldValue("imageSource", value);
										if (value === "web") {
											setIsModalOpen(true);
										} else if (value === "device") {
											document.getElementById("fileUpload").click();
										}
									}}
								>
									<option value="">Select Image Source</option>
									<option value="device">Device</option>
									<option value="web">Web</option>
								</Field>
								<ErrorMessage
									name="imageSource"
									component="div"
									className="error-message"
								/>
							</div>

							{/* File Upload Input (Hidden) */}
							<input
								type="file"
								id="fileUpload"
								name="hairStyleImages"
								style={{ display: "none" }}
								multiple
								accept="image/*"
								onChange={(e) => handleImageSelection(e.target.files)}
							/>

							{/* Selected Image Preview */}
							{selectedImages.length > 0 && (
								<div className="image-preview-container">
									{selectedImages.map((image, index) => (
										<div key={index} className="image-preview">
											<img
												src={image.url}
												alt={`Selected ${index}`}
												className="preview-image"
											/>
											<button
												type="button"
												className="remove-image-button"
												onClick={() => handleRemoveImage(index)}
											>
												✖
											</button>
										</div>
									))}
								</div>
							)}

							{/* Other Fields */}
							<div className="form_group_div">
								<label>Hair Style Name</label>
								<Field
									type="text"
									name="hairStyleName"
									placeholder="Enter Hair Style Name"
									className="form_control_Input"
								/>
								<ErrorMessage
									name="hairStyleName"
									component="div"
									className="error-message"
								/>
							</div>

							<div className="form_group_div">
								<label>Service Type</label>
								<Field
									as="select"
									name="serviceType"
									className="form_control_Input"
								>
									<option value="">Select Service Type</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</Field>
								<ErrorMessage
									name="serviceType"
									component="div"
									className="error-message"
								/>
							</div>

							<div className="form_group_div">
								<label>Service Date</label>
								<Field
									type="date"
									name="serviceDate"
									className="form_control_Input"
								/>
								<ErrorMessage
									name="serviceDate"
									component="div"
									className="error-message"
								/>
							</div>

							<div className="form_group_div">
								<label>Service Time</label>
								<Field
									type="time"
									name="serviceTime"
									className="form_control_Input"
								/>
								<ErrorMessage
									name="serviceTime"
									component="div"
									className="error-message"
								/>
							</div>

							<div className="form_group_div">
								<label>Description</label>
								<Field
									as="textarea"
									name="description"
									placeholder="Enter Description"
									className="form_control_Input"
								/>
								<ErrorMessage
									name="description"
									component="div"
									className="error-message"
								/>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="submit-button"
								disabled={loading}
							>
								{loading ? "Processing Booking..." : "Submit Booking"}
							</button>
						</Form>
					)}
				</Formik>

				{/* Modal for Web Images */}
			</div>
			{isModalOpen && (
				<div className="GlobalImageModal-style">
					<GlobalImageModal
						isOpen={isModalOpen}
						onClose={() => setIsModalOpen(false)}
						onSelectImage={handleWebImageSelection}
					/>
				</div>
			)}
		</>
	);
};

export default BookingForm;
