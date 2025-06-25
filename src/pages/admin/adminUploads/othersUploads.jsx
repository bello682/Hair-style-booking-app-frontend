// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { uploadOtherImages } from "./../../../store/action/adminActions/imagesUploadAction";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import "../../CSS/adminOtherImagesUpload.css";
// import { FaPlus } from "react-icons/fa6";

// const OthersUploads = () => {
// 	const dispatch = useDispatch();
// 	const [images, setImages] = useState([{ imageNames: "", otherImages: null }]);
// 	const { loadingOther, errorOther } = useSelector(
// 		(state) => state.othersStateReducer // Ensure this is the correct reducer for other images
// 	);

// 	const handleAddImage = () => {
// 		setImages([...images, { imageNames: "", otherImages: null }]);
// 	};

// 	const handleFileChange = (e, setFieldValue, index) => {
// 		const file = e.currentTarget.files[0];
// 		setFieldValue(`images[${index}].otherImages`, file);
// 	};

// 	const validationSchema = Yup.object().shape({
// 		images: Yup.array()
// 			.of(
// 				Yup.object().shape({
// 					imageNames: Yup.string().required("Image name is required"),
// 					otherImages: Yup.mixed().required("Image file is required"),
// 				})
// 			)
// 			.min(1, "At least one image is required"),
// 	});

// 	const handleSubmit = (values, { resetForm }) => {
// 		const formData = new FormData();
// 		values.images.forEach((img) => {
// 			formData.append("imageNames", img.imageNames);
// 			formData.append("otherImages", img.otherImages);
// 		});
// 		dispatch(uploadOtherImages(formData));
// 		resetForm();
// 	};

// 	return (
// 		<div className="others_upload_wrapper">
// 			<div className="others-uploads">
// 				<h2>Upload Other Hairstyles</h2>
// 				<Formik
// 					initialValues={{ images }}
// 					validationSchema={validationSchema}
// 					onSubmit={handleSubmit}
// 					enableReinitialize
// 				>
// 					{({
// 						values,
// 						errors,
// 						touched,
// 						handleSubmit,
// 						handleBlur,
// 						setFieldValue,
// 						setFieldTouched,
// 					}) => (
// 						<Form onSubmit={handleSubmit} encType="multipart/form-data">
// 							{values.images.map((img, index) => (
// 								<div key={index} className="image-input fade-in">
// 									<label>
// 										Image Name:
// 										<Field
// 											type="text"
// 											name={`images[${index}].imageNames`}
// 											className={`input-field ${
// 												errors.images && touched.images ? "error" : ""
// 											}`}
// 											placeholder="Enter image name"
// 											onBlur={handleBlur}
// 										/>
// 										{errors.images && touched.images && (
// 											<div className="error-text">
// 												{errors.images[index]?.imageNames}
// 											</div>
// 										)}
// 									</label>
// 									<label>
// 										Image File:
// 										<input
// 											type="file"
// 											accept="image/*"
// 											name={`images[${index}].otherImages`}
// 											className={`file-upload ${
// 												errors.images && touched.images ? "error" : ""
// 											}`}
// 											onChange={(e) =>
// 												handleFileChange(e, setFieldValue, index)
// 											}
// 											onBlur={() =>
// 												setFieldTouched(`images[${index}].otherImages`, true)
// 											}
// 										/>
// 										{errors.images && touched.images && (
// 											<div className="error-text">
// 												{errors.images[index]?.otherImages}
// 											</div>
// 										)}
// 									</label>
// 								</div>
// 							))}
// 							<button
// 								type="button"
// 								onClick={handleAddImage}
// 								className="add-image-btn slide-in"
// 							>
// 								<FaPlus className="add-image-btn-plus-sign" />
// 								{"  "}
// 								Add More Images
// 							</button>
// 							<button
// 								type="submit"
// 								className={`submit-btn ${loadingOther ? "loading" : ""}`}
// 								disabled={loadingOther}
// 							>
// 								{loadingOther ? "Uploading..." : "Submit"}
// 							</button>
// 							{errorOther && (
// 								<p className="error-message">{JSON.stringify(errorOther)}</p>
// 							)}
// 						</Form>
// 					)}
// 				</Formik>
// 			</div>
// 		</div>
// 	);
// };

// export default OthersUploads;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadOtherImages } from "./../../../store/action/adminActions/imagesUploadAction";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../CSS/adminOtherImagesUpload.css";
import { FaPlus } from "react-icons/fa6";

const OthersUploads = () => {
	const dispatch = useDispatch();
	const { loadingOther, errorOther } = useSelector(
		(state) => state.othersStateReducer
	);

	const validationSchema = Yup.object().shape({
		images: Yup.array()
			.of(
				Yup.object().shape({
					imageNames: Yup.string().required("Image name is required"),
					otherImages: Yup.mixed().required("Image file is required"),
				})
			)
			.min(1, "At least one image is required"),
	});

	const handleSubmit = (values, { resetForm }) => {
		const formData = new FormData();
		values.images.forEach((img) => {
			formData.append("imageNames", img.imageNames);
			formData.append("otherImages", img.otherImages);
		});
		dispatch(uploadOtherImages(formData));
		resetForm();
	};

	return (
		<div className="others_upload_wrapper ">
			<div className="others-uploads">
				<h2>Upload Other Hairstyles</h2>
				<Formik
					initialValues={{
						images: [{ imageNames: "", otherImages: null }],
					}}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({
						values,
						errors,
						touched,
						handleSubmit,
						handleBlur,
						setFieldValue,
						setFieldTouched,
					}) => (
						<Form onSubmit={handleSubmit} encType="multipart/form-data">
							{values.images.map((img, index) => (
								<div key={index} className="image-input fade-in">
									<label>
										Image Name:
										<Field
											type="text"
											name={`images[${index}].imageNames`}
											className={`input-field ${
												errors.images?.[index]?.imageNames &&
												touched.images?.[index]?.imageNames
													? "error"
													: ""
											}`}
											placeholder="Enter image name"
											onBlur={handleBlur}
										/>
										{errors.images?.[index]?.imageNames &&
											touched.images?.[index]?.imageNames && (
												<div className="error-text">
													{errors.images[index].imageNames}
												</div>
											)}
									</label>
									<label>
										Image File:
										<input
											type="file"
											accept="image/*"
											name={`images[${index}].otherImages`}
											className={`file-upload ${
												errors.images?.[index]?.otherImages &&
												touched.images?.[index]?.otherImages
													? "error"
													: ""
											}`}
											onChange={(e) => {
												const file = e.currentTarget.files[0];
												setFieldValue(`images[${index}].otherImages`, file);
											}}
											onBlur={() =>
												setFieldTouched(`images[${index}].otherImages`, true)
											}
										/>
										{errors.images?.[index]?.otherImages &&
											touched.images?.[index]?.otherImages && (
												<div className="error-text">
													{errors.images[index].otherImages}
												</div>
											)}
									</label>
								</div>
							))}
							<button
								type="button"
								onClick={() => {
									setFieldValue("images", [
										...values.images,
										{ imageNames: "", otherImages: null },
									]);
								}}
								className="add-image-btn slide-in"
							>
								<FaPlus className="add-image-btn-plus-sign" />
								{"  "}
								Add More Images
							</button>
							<button
								type="submit"
								className={`submit-btn ${loadingOther ? "loading" : ""}`}
								disabled={loadingOther}
							>
								{loadingOther ? "Uploading..." : "Submit"}
							</button>
							{errorOther && (
								<p className="error-message">{JSON.stringify(errorOther)}</p>
							)}
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default OthersUploads;
