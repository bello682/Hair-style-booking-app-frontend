// // src/components/Register.js
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import AdminChat from "../../chat/conversationalChat/adminChat";
// import { registerAdmin } from "./../../store/action/adminActions/registrationAction";

// const AdminSignUp = () => {
// 	const dispatch = useDispatch();
// 	const { loading, error } = useSelector((state) => state.adminReducerState);
// 	const navigation = useNavigate();

// 	const handleNavigation = () => {
// 		navigation("/admin-verification"); // Redirect to login or any other page after successful registration
// 	};

// 	return (
// 		<div>
// 			<h1>Admin Register</h1>
// 			<Formik
// 				initialValues={{
// 					fullName: "",
// 					email: "",
// 					password: "",
// 				}}
// 				validationSchema={Yup.object({
// 					fullName: Yup.string().required("Full name is required"),
// 					email: Yup.string()
// 						.email("Invalid email address")
// 						.required("Email is required"),
// 					password: Yup.string().required("Phone number is required"),
// 				})}
// 				onSubmit={(values) => {
// 					dispatch(registerAdmin(values));
// 					handleNavigation();
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
// 							<label htmlFor="password">Password</label>
// 							<input
// 								id="password"
// 								name="password"
// 								type="text"
// 								onChange={handleChange}
// 								onBlur={handleBlur}
// 								value={values.password}
// 							/>
// 							{touched.password && errors.password ? (
// 								<div>{errors.password}</div>
// 							) : null}
// 						</div>

// 						<button type="submit" disabled={loading}>
// 							{loading ? "Registering..." : "Register"}
// 						</button>

// 						{error && <div>{error.message || "An error occurred"}</div>}
// 					</form>
// 				)}
// 			</Formik>

// 			<AdminChat />
// 		</div>
// 	);
// };

// export default AdminSignUp;

// AdminSignUp.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import AdminChat from "../../chat/conversationalChat/adminChat";
import { registerAdmin } from "./../../store/action/adminActions/registrationAction";
import "../CSS/testing.css";
import bg from "../../asset/images/bg.png";

const AdminSignUp = () => {
	const dispatch = useDispatch();
	const { loading, error } = useSelector((state) => state.adminReducerState);
	const navigate = useNavigate();

	const handleNavigation = () => {
		navigate("/admin-verification");
	};

	return (
		<div className="login-form">
			<div className="container">
				<div className="main">
					<div className="content">
						<h2>Admin Register</h2>
						<Formik
							initialValues={{
								fullName: "",
								email: "",
								password: "",
							}}
							validationSchema={Yup.object({
								fullName: Yup.string().required("Full name is required"),
								email: Yup.string()
									.email("Invalid email address")
									.required("Email is required"),
								password: Yup.string().required("Password is required"),
							})}
							onSubmit={(values) => {
								dispatch(registerAdmin(values));
								handleNavigation();
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
										<label htmlFor="password">Password</label>
										<input
											id="password"
											name="password"
											type="password"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.password}
											placeholder="Password"
											required
										/>
										{touched.password && errors.password && (
											<div className="error">{errors.password}</div>
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

									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											width: "100",
											gap: "5px",
											marginTop: "20px",
										}}
									>
										<span>Already have an account?</span>{" "}
										<Link
											to="/admin-login"
											style={{
												cursor: "pointer",
												color: "red",
											}}
										>
											Sign In
										</Link>
									</div>
								</form>
							)}
						</Formik>
					</div>
					<div className="form-img">
						<img src={bg} alt="Background" />
					</div>
				</div>
			</div>
			<AdminChat />
		</div>
	);
};

export default AdminSignUp;
