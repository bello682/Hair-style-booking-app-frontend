// // src/components/Register.js
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { registerUser } from "../../store/action/userActions/resgisterAction";
// import { useNavigate } from "react-router-dom";
// import UserChat from "../../chat/conversationalChat/userChat";

// const UserSignUp = () => {
// 	const dispatch = useDispatch();
// 	const { loading, error } = useSelector(
// 		(state) => state.registrationReducerUser
// 	);
// 	const navigation = useNavigate();

// 	return (
// 		<div>
// 			<h1>Register</h1>
// 			<Formik
// 				initialValues={{
// 					fullName: "",
// 					email: "",
// 					phoneNumber: "",
// 				}}
// 				validationSchema={Yup.object({
// 					fullName: Yup.string().required("Full name is required"),
// 					email: Yup.string()
// 						.email("Invalid email address")
// 						.required("Email is required"),
// 					phoneNumber: Yup.string().required("Phone number is required"),
// 				})}
// 				onSubmit={(values) => {
// 					dispatch(registerUser(values));
// 					navigation("/verify-otp"); // Redirect to login or any other page after successful registration
// 				}}
// 			>
// 				{({
// 					handleSubmit,
// 					handleChange,
// 					values,
// 					errors,
// 					touched,
// 					handleBlur,
// 				}) => (
// 					<form onSubmit={handleSubmit}>
// 						<div>
// 							<label htmlFor="fullName">Full Name</label>
// 							<input
// 								id="fullName"
// 								name="fullName"
// 								type="text"
// 								onChange={handleChange}
// 								onBlur={handleBlur}
// 								value={values.fullName}
// 							/>
// 							{touched.fullName && errors.fullName ? (
// 								<div>{errors.fullName}</div>
// 							) : null}
// 						</div>

// 						<div>
// 							<label htmlFor="email">Email</label>
// 							<input
// 								id="email"
// 								name="email"
// 								type="email"
// 								onChange={handleChange}
// 								onBlur={handleBlur}
// 								value={values.email}
// 							/>
// 							{touched.email && errors.email ? <div>{errors.email}</div> : null}
// 						</div>

// 						<div>
// 							<label htmlFor="phoneNumber">Phone Number</label>
// 							<input
// 								id="phoneNumber"
// 								name="phoneNumber"
// 								type="text"
// 								onChange={handleChange}
// 								onBlur={handleBlur}
// 								value={values.phoneNumber}
// 							/>
// 							{touched.phoneNumber && errors.phoneNumber ? (
// 								<div>{errors.phoneNumber}</div>
// 							) : null}
// 						</div>

// 						<button type="submit" disabled={loading}>
// 							{loading ? "Registering..." : "Register"}
// 						</button>

// 						{error && <div>{error.message || "An error occurred"}</div>}
// 					</form>
// 				)}
// 			</Formik>

// 			<UserChat />
// 		</div>
// 	);
// };

// export default UserSignUp;

// UserSignUp.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../store/action/userActions/resgisterAction";
import { useNavigate } from "react-router-dom";
import UserChat from "../../chat/conversationalChat/userChat";
import "../CSS/testing.css";
import bg from "../../asset/images/bg.png";

const UserSignUp = () => {
	const dispatch = useDispatch();
	const { loading, error, user } = useSelector(
		(state) => state.registrationReducerUser
	);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate("/verify-otp"); // Redirect to OTP verification page if user is already logged in
		}
	}, [user, navigate]);

	return (
		<div className="login-form">
			<div className="container">
				<div className="main">
					<div className="content">
						<h2>User Register</h2>
						<Formik
							initialValues={{
								fullName: "",
								email: "",
								phoneNumber: "",
							}}
							validationSchema={Yup.object({
								fullName: Yup.string().required("Full name is required"),
								email: Yup.string()
									.email("Invalid email address")
									.required("Email is required"),
								phoneNumber: Yup.string().required("Phone number is required"),
							})}
							onSubmit={(values) => {
								dispatch(registerUser(values));
							}}
						>
							{({
								handleSubmit,
								handleChange,
								values,
								errors,
								touched,
								handleBlur,
							}) => (
								<form onSubmit={handleSubmit}>
									<div>
										<label htmlFor="fullName">Full Name</label>
										<input
											id="fullName"
											name="fullName"
											type="text"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.fullName}
											placeholder="Full Name"
											required
										/>
										{touched.fullName && errors.fullName && (
											<div className="error">{errors.fullName}</div>
										)}
									</div>

									<div>
										<label htmlFor="email">Email</label>
										<input
											id="email"
											name="email"
											type="email"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email}
											placeholder="Email"
											required
										/>
										{touched.email && errors.email && (
											<div className="error">{errors.email}</div>
										)}
									</div>

									<div>
										<label htmlFor="phoneNumber">Phone Number</label>
										<input
											id="phoneNumber"
											name="phoneNumber"
											type="text"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.phoneNumber}
											placeholder="Enter your (Whatsapp) Phone Number"
											required
										/>
										{touched.phoneNumber && errors.phoneNumber && (
											<div className="error">{errors.phoneNumber}</div>
										)}
									</div>

									<button className="btn" type="submit" disabled={loading}>
										{loading ? "Registering..." : "Register"}
									</button>

									{error && (
										<div className="error">
											{error.message || "An error occurred"}
										</div>
									)}
								</form>
							)}
						</Formik>
					</div>
					<div className="form-img">
						<img src={bg} alt="Background" />
					</div>
				</div>
			</div>
			{/* <UserChat /> */}
		</div>
	);
};

export default UserSignUp;
