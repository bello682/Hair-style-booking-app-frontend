// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { uploadFemaleImages } from "../../../store/action/adminActions/imagesUploadAction"; // Change action import
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { FaPlus } from "react-icons/fa6";
// import "../../CSS/adminImagesUploadsFemale.css";

// const FemaleUploads = () => {
// 	const dispatch = useDispatch();
// 	const [images, setImages] = useState([
// 		{ imageNames: "", femaleImages: null },
// 	]);
// 	const { loadingFemale, errorFemale } = useSelector(
// 		(state) => state.femaleStateReducer // Ensure this is the correct reducer for female images
// 	);

// 	const handleAddImage = () => {
// 		setImages([...images, { imageNames: "", femaleImages: null }]);
// 	};

// 	const handleFileChange = (e, setFieldValue, index) => {
// 		const file = e.currentTarget.files[0];
// 		setFieldValue(`images[${index}].femaleImages`, file);
// 	};

// 	const validationSchema = Yup.object().shape({
// 		images: Yup.array()
// 			.of(
// 				Yup.object().shape({
// 					imageNames: Yup.string().required("Image name is required"),
// 					femaleImages: Yup.mixed().required("Image file is required"),
// 				})
// 			)
// 			.min(1, "At least one image is required"),
// 	});

// 	const handleSubmit = (values, { resetForm }) => {
// 		const formData = new FormData();
// 		values.images.forEach((img) => {
// 			formData.append("imageNames", img.imageNames);
// 			formData.append("femaleImages", img.femaleImages);
// 		});
// 		dispatch(uploadFemaleImages(formData));
// 		resetForm();
// 	};

// 	return (
// 		<div className="female_upload_wrapper">
// 			<div className="female-uploads">
// 				<h2>Upload Female Hairstyles</h2>
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
// 											name={`images[${index}].femaleImages`}
// 											className={`file-upload ${
// 												errors.images && touched.images ? "error" : ""
// 											}`}
// 											onChange={(e) =>
// 												handleFileChange(e, setFieldValue, index)
// 											}
// 											onBlur={() =>
// 												setFieldTouched(`images[${index}].femaleImages`, true)
// 											}
// 										/>
// 										{errors.images && touched.images && (
// 											<div className="error-text">
// 												{errors.images[index]?.femaleImages}
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
// 								className={`submit-btn ${loadingFemale ? "loading" : ""}`}
// 								disabled={loadingFemale}
// 							>
// 								{loadingFemale ? "Uploading..." : "Submit"}
// 							</button>
// 							{errorFemale && (
// 								<p className="error-message">{JSON.stringify(errorFemale)}</p>
// 							)}
// 						</Form>
// 					)}
// 				</Formik>
// 			</div>
// 		</div>
// 	);
// };

// export default FemaleUploads;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFemaleImages } from "../../../store/action/adminActions/imagesUploadAction";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FaPlus } from "react-icons/fa6";
import "../../CSS/adminImagesUploadsFemale.css";

const FemaleUploads = () => {
	const dispatch = useDispatch();
	const { loadingFemale, errorFemale } = useSelector(
		(state) => state.femaleStateReducer
	);

	const validationSchema = Yup.object().shape({
		images: Yup.array()
			.of(
				Yup.object().shape({
					imageNames: Yup.string().required("Image name is required"),
					femaleImages: Yup.mixed().required("Image file is required"),
				})
			)
			.min(1, "At least one image is required"),
	});

	const handleSubmit = (values, { resetForm }) => {
		const formData = new FormData();
		values.images.forEach((img) => {
			formData.append("imageNames", img.imageNames);
			formData.append("femaleImages", img.femaleImages);
		});
		dispatch(uploadFemaleImages(formData));
		resetForm();
	};

	return (
		<div className="female_upload_wrapper">
			<div className="female-uploads">
				<h2>Upload Female Hairstyles</h2>
				<Formik
					initialValues={{
						images: [{ imageNames: "", femaleImages: null }],
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
											name={`images[${index}].femaleImages`}
											className={`file-upload ${
												errors.images?.[index]?.femaleImages &&
												touched.images?.[index]?.femaleImages
													? "error"
													: ""
											}`}
											onChange={(e) => {
												const file = e.currentTarget.files[0];
												setFieldValue(`images[${index}].femaleImages`, file);
											}}
											onBlur={() =>
												setFieldTouched(`images[${index}].femaleImages`, true)
											}
										/>
										{errors.images?.[index]?.femaleImages &&
											touched.images?.[index]?.femaleImages && (
												<div className="error-text">
													{errors.images[index].femaleImages}
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
										{ imageNames: "", femaleImages: null },
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
								className={`submit-btn ${loadingFemale ? "loading" : ""}`}
								disabled={loadingFemale}
							>
								{loadingFemale ? "Uploading..." : "Submit"}
							</button>
							{errorFemale && (
								<p className="error-message">{JSON.stringify(errorFemale)}</p>
							)}
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default FemaleUploads;
