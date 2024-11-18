// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { bookHairService } from "./../../store/action/userActions/userBookingHairRequest";
// import ChatModal from "../../chat/chatModal";

// const BookingForm = () => {
// 	const dispatch = useDispatch();
// 	const { loading, booking, error } = useSelector(
// 		(state) => state.bookingRquestState
// 	);

// 	const validationSchema = Yup.object({
// 		hairStyleImages: Yup.mixed().required("Hair style image is required"),
// 		hairStyleName: Yup.string().required("Required"),
// 		serviceType: Yup.string().required("Required"),
// 		serviceDate: Yup.date().required("Required"),
// 		serviceTime: Yup.string().required("Required"),
// 		description: Yup.string().max(500, "Description too long"),
// 	});

// 	const initialValues = {
// 		hairStyleImages: [],
// 		hairStyleName: "",
// 		serviceType: "",
// 		serviceDate: "",
// 		serviceTime: "",
// 		description: "",
// 	};

// 	const onSubmit = (values) => {
// 		const formData = new FormData();
// 		values.hairStyleImages.forEach((file) =>
// 			formData.append("hairStyleImages", file)
// 		);
// 		formData.append("hairStyleName", values.hairStyleName);
// 		formData.append("serviceType", values.serviceType);
// 		formData.append("serviceDate", values.serviceDate);
// 		formData.append("serviceTime", values.serviceTime);
// 		formData.append("description", values.description);

// 		dispatch(bookHairService(formData));
// 	};

// 	return (
// 		<>
// 			<Formik
// 				initialValues={initialValues}
// 				validationSchema={validationSchema}
// 				onSubmit={onSubmit}
// 			>
// 				{({ handleSubmit, setFieldValue, errors, touched }) => (
// 					<Form onSubmit={handleSubmit}>
// 						{/* Hair Style Images */}
// 						<div>
// 							<input
// 								type="file"
// 								name="hairStyleImages"
// 								multiple
// 								onChange={(event) => {
// 									const files = Array.from(event.target.files);
// 									setFieldValue("hairStyleImages", files);
// 								}}
// 							/>
// 							{errors.hairStyleImages && touched.hairStyleImages && (
// 								<div>{errors.hairStyleImages}</div>
// 							)}
// 						</div>

// 						{/* Other fields */}
// 						<div>
// 							<Field
// 								type="text"
// 								name="hairStyleName"
// 								placeholder="Hair Style Name"
// 							/>
// 							{errors.hairStyleName && touched.hairStyleName && (
// 								<div>{errors.hairStyleName}</div>
// 							)}
// 						</div>

// 						<div>
// 							<Field
// 								type="text"
// 								name="serviceType"
// 								placeholder="Service Type"
// 							/>
// 							{errors.serviceType && touched.serviceType && (
// 								<div>{errors.serviceType}</div>
// 							)}
// 						</div>

// 						<div>
// 							<Field type="date" name="serviceDate" />
// 							{errors.serviceDate && touched.serviceDate && (
// 								<div>{errors.serviceDate}</div>
// 							)}
// 						</div>

// 						<div>
// 							<Field type="time" name="serviceTime" />
// 							{errors.serviceTime && touched.serviceTime && (
// 								<div>{errors.serviceTime}</div>
// 							)}
// 						</div>

// 						<div>
// 							<Field
// 								as="textarea"
// 								name="description"
// 								placeholder="Description"
// 							/>
// 							{errors.description && touched.description && (
// 								<div>{errors.description}</div>
// 							)}
// 						</div>

// 						<button type="submit" disabled={loading}>
// 							Book Service
// 						</button>

// 						{booking && (
// 							<div>Booking successful: {JSON.stringify(booking)}</div>
// 						)}
// 						{error && (
// 							<div>Error: {error.message || JSON.stringify(error)}</div>
// 						)}
// 					</Form>
// 				)}
// 			</Formik>
// 		</>
// 	);
// };

// export default BookingForm;

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { bookHairService } from "./../../store/action/userActions/userBookingHairRequest";
import "../CSS/bookingForm.css";
import bg from "../../asset/images/bg.png";

const BookingForm = () => {
	const dispatch = useDispatch();
	const { loading, booking, error } = useSelector(
		(state) => state.bookingRquestState
	);
	const [previewImages, setPreviewImages] = useState([]);

	const validationSchema = Yup.object({
		imageSource: Yup.string().required("Please select an image source"),
		hairStyleName: Yup.string().required("Required"),
		serviceType: Yup.string().required("Required"),
		serviceDate: Yup.date().required("Required"),
		serviceTime: Yup.string().required("Required"),
		description: Yup.string().max(500, "Description too long"),
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

	const onSubmit = (values) => {
		const formData = new FormData();

		values.hairStyleImages.forEach((file) =>
			formData.append("hairStyleImages", file)
		);
		formData.append("hairStyleName", values.hairStyleName);
		formData.append("serviceType", values.serviceType);
		formData.append("serviceDate", values.serviceDate);
		formData.append("serviceTime", values.serviceTime);
		formData.append("description", values.description);

		dispatch(bookHairService(formData));
	};

	const handleImageSourceChange = (event, setFieldValue) => {
		const source = event.target.value;
		setFieldValue("imageSource", source);

		if (source === "device") {
			document.getElementById("fileUpload").click();
		} else if (source === "web") {
			alert("Web image selection is under development.");
		}
	};

	const handleFileChange = (event, setFieldValue) => {
		const files = Array.from(event.target.files);
		setFieldValue("hairStyleImages", files);

		const filePreviews = files.map((file) => URL.createObjectURL(file));
		setPreviewImages(filePreviews);
	};

	return (
		<>
			<div className="h1_title_booking">
				<h1> Fill in your Booking Information</h1>
			</div>
			<div className="booking-container">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{({ handleSubmit, setFieldValue, errors, touched }) => (
						<Form onSubmit={handleSubmit} className="booking-form">
							<div className="form-group">
								<label>Image Source</label>
								<Field
									as="select"
									name="imageSource"
									className={`form-control ${
										touched.imageSource && errors.imageSource
											? "input-error"
											: ""
									}`}
									onChange={(event) =>
										handleImageSourceChange(event, setFieldValue)
									}
								>
									<option value="">Select Image Source</option>
									<option value="device">Select image from your device</option>
									<option value="web">Select from our web images</option>
								</Field>
								<ErrorMessage
									name="imageSource"
									component="div"
									className="error-message"
								/>

								<input
									type="file"
									id="fileUpload"
									name="hairStyleImages"
									style={{ display: "none" }}
									multiple
									onChange={(event) => handleFileChange(event, setFieldValue)}
								/>
							</div>

							<div className="form-group">
								<label>Hair Style Name</label>
								<Field
									type="text"
									name="hairStyleName"
									placeholder="Enter Hair Style Name"
									className="form-control"
								/>
								<ErrorMessage
									name="hairStyleName"
									component="div"
									className="error-message"
								/>
							</div>

							<div className="form-group">
								<label>Service Type</label>
								<Field
									as="select"
									name="serviceType"
									placeholder="Enter Service Type"
									className="form-control"
									onChange={(event) =>
										setFieldValue("serviceType", event.target.value)
									}
								>
									<option value="">Select Service Type</option>
									<option value="male">male</option>
									<option value="female">female</option>
								</Field>
								<ErrorMessage
									name="serviceType"
									component="div"
									className="error-message"
								/>
							</div>

							<div className="form-group">
								<label>Service Date</label>
								<Field
									type="date"
									name="serviceDate"
									className="form-control"
								/>
								<ErrorMessage
									name="serviceDate"
									component="div"
									className="error-message"
								/>
							</div>

							<div className="form-group">
								<label>Service Time</label>
								<Field
									type="time"
									name="serviceTime"
									className="form-control"
								/>
								<ErrorMessage
									name="serviceTime"
									component="div"
									className="error-message"
								/>
							</div>

							<div className="form-group">
								<label>Description</label>
								<Field
									as="textarea"
									name="description"
									placeholder="Enter description"
									className="form-control"
								/>
								<ErrorMessage
									name="description"
									component="div"
									className="error-message"
								/>
							</div>

							<button
								type="submit"
								disabled={loading}
								className="submit-button"
							>
								{loading ? "Booking Loading..." : "Book Service"}
							</button>

							{booking && (
								<div className="success-message">
									Booking successful: {JSON.stringify(booking)}
								</div>
							)}
							{error && (
								<div className="error-message">
									Error: {error.message || JSON.stringify(error)}
								</div>
							)}
						</Form>
					)}
				</Formik>

				{/* Conditionally render the image preview container */}
				{previewImages.length > 0 && (
					<div className="image-preview-container">
						{previewImages.map((src, index) => (
							<div
								key={index}
								className="image-preview"
								style={{ backgroundImage: `url(${src})` }}
							></div>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default BookingForm;
