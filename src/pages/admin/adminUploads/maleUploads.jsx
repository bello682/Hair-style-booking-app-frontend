// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { uploadMaleImages } from "../../../store/action/adminActions/imagesUploadAction";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { FaPlus } from "react-icons/fa6";
// import "../../CSS/adminImagesUploads.css";

// const MaleUploads = () => {
// 	const dispatch = useDispatch();
// 	const [images, setImages] = useState([{ imageNames: "", maleImages: null }]);
// 	const { loadingMale, errorMale } = useSelector(
// 		(state) => state.maleStateReducer
// 	);

// 	const handleAddImage = () => {
// 		setImages([...images, { imageNames: "", maleImages: null }]);
// 	};

// 	const handleFileChange = (e, setFieldValue, index) => {
// 		const file = e.currentTarget.files[0];
// 		setFieldValue(`images[${index}].maleImages`, file);
// 	};

// 	const validationSchema = Yup.object().shape({
// 		images: Yup.array()
// 			.of(
// 				Yup.object().shape({
// 					imageNames: Yup.string().required("Image name is required"),
// 					maleImages: Yup.mixed().required("Image file is required"),
// 				})
// 			)
// 			.min(1, "At least one image is required"),
// 	});

// 	const handleSubmit = (values, { resetForm }) => {
// 		const formData = new FormData();
// 		values.images.forEach((img) => {
// 			formData.append("imageNames", img.imageNames);
// 			formData.append("maleImages", img.maleImages);
// 		});
// 		dispatch(uploadMaleImages(formData));
// 		resetForm();
// 	};

// 	return (
// 		<div className="male_upload_wrapper">
// 			<div className="male-uploads">
// 				<h2>Upload Male Hairstyles</h2>
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
// 						console.log(values.images),
// 						(
// 							<Form onSubmit={handleSubmit} encType="multipart/form-data">
// 								{values.images.map((img, index) => (
// 									<div key={index} className="image-input fade-in">
// 										<label>Image Name:</label>
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

// 										<label>Image File:</label>
// 										<input
// 											type="file"
// 											accept="image/*"
// 											name={`images[${index}].maleImages`}
// 											className={`file-upload ${
// 												errors.images && touched.images ? "error" : ""
// 											}`}
// 											onChange={(e) =>
// 												handleFileChange(e, setFieldValue, index)
// 											}
// 											onBlur={() =>
// 												setFieldTouched(`images[${index}].maleImages`, true)
// 											}
// 										/>
// 										{errors.images && touched.images && (
// 											<div className="error-text">
// 												{errors.images[index]?.maleImages}
// 											</div>
// 										)}
// 									</div>
// 								))}
// 								<button
// 									type="button"
// 									onClick={handleAddImage}
// 									className="add-image-btn slide-in"
// 								>
// 									<FaPlus className="add-image-btn-plus-sign" />
// 									{"  "}
// 									Add More Images
// 								</button>
// 								<button
// 									type="submit"
// 									className={`submit-btn ${loadingMale ? "loading" : ""}`}
// 									disabled={loadingMale}
// 								>
// 									{loadingMale ? "Uploading..." : "Submit"}
// 								</button>
// 								{errorMale && (
// 									<p className="error-message">{JSON.stringify(errorMale)}</p>
// 								)}
// 							</Form>
// 						)
// 					)}
// 				</Formik>
// 			</div>
// 		</div>
// 	);
// };

// export default MaleUploads;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadMaleImages } from "../../../store/action/adminActions/imagesUploadAction";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FaPlus } from "react-icons/fa6";
import "../../CSS/adminImagesUploads.css";

const MaleUploads = () => {
	const dispatch = useDispatch();
	const { loadingMale, errorMale } = useSelector(
		(state) => state.maleStateReducer
	);

	const validationSchema = Yup.object().shape({
		images: Yup.array()
			.of(
				Yup.object().shape({
					imageNames: Yup.string().required("Image name is required"),
					maleImages: Yup.mixed().required("Image file is required"),
				})
			)
			.min(1, "At least one image is required"),
	});

	const handleSubmit = (values, { resetForm }) => {
		const formData = new FormData();
		values.images.forEach((img) => {
			formData.append("imageNames", img.imageNames);
			formData.append("maleImages", img.maleImages);
		});
		dispatch(uploadMaleImages(formData));
		resetForm();
	};

	return (
		<div className="male_upload_wrapper">
			<div className="male-uploads">
				<h2>Upload Male Hairstyles</h2>
				<Formik
					initialValues={{
						images: [{ imageNames: "", maleImages: null }],
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
									<label>Image Name:</label>
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

									<label>Image File:</label>
									<input
										type="file"
										accept="image/*"
										className={`file-upload ${
											errors.images?.[index]?.maleImages &&
											touched.images?.[index]?.maleImages
												? "error"
												: ""
										}`}
										onChange={(e) => {
											const file = e.currentTarget.files[0];
											setFieldValue(`images[${index}].maleImages`, file);
										}}
										onBlur={() =>
											setFieldTouched(`images[${index}].maleImages`, true)
										}
									/>
									{errors.images?.[index]?.maleImages &&
										touched.images?.[index]?.maleImages && (
											<div className="error-text">
												{errors.images[index].maleImages}
											</div>
										)}
								</div>
							))}

							<button
								type="button"
								onClick={() => {
									setFieldValue("images", [
										...values.images,
										{ imageNames: "", maleImages: null },
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
								className={`submit-btn ${loadingMale ? "loading" : ""}`}
								disabled={loadingMale}
							>
								{loadingMale ? "Uploading..." : "Submit"}
							</button>
							{errorMale && (
								<p className="error-message">{JSON.stringify(errorMale)}</p>
							)}
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default MaleUploads;
