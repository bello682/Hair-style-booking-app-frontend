// // src/pages/VerifyOtp.js
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { verifyOtp } from "../../store/action/userActions/verifyUserOtpAction";
// import ResendOtpPage from "./resendOtp";
// import { useNavigate } from "react-router-dom";

// const VerifyOtp = () => {
// 	const dispatch = useDispatch();
// 	const navigate = useNavigate();
// 	const { loading, error, successMessage } = useSelector(
// 		(state) => state.verifyUserOtpReducerState
// 	);

// 	const handleNavigate = () => {
// 		navigate("/booking/hair-service");
// 	};

// 	return (
// 		<div>
// 			<h1>Verify OTP</h1>
// 			<Formik
// 				initialValues={{ otp: "" }}
// 				validationSchema={Yup.object({
// 					otp: Yup.string().required("OTP is required"),
// 				})}
// 				onSubmit={(values) => {
// 					dispatch(verifyOtp(values.otp)); // Pass only the otp value
// 					handleNavigate();
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
// 							<label htmlFor="otp">OTP</label>
// 							<input
// 								id="otp"
// 								name="otp"
// 								type="text"
// 								onChange={handleChange}
// 								onBlur={handleBlur}
// 								value={values.otp}
// 							/>
// 							{touched.otp && errors.otp && <div>{errors.otp}</div>}
// 						</div>

// 						<button type="submit" disabled={loading}>
// 							{loading ? "Verifying..." : "Verify OTP"}
// 						</button>

// 						{error && <div>{error.message}</div>}
// 						{successMessage && <div>{successMessage}</div>}
// 					</form>
// 				)}
// 			</Formik>

// 			<ResendOtpPage />
// 		</div>
// 	);
// };

// export default VerifyOtp;

// VerifyOtp.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { verifyOtp } from "../../store/action/userActions/verifyUserOtpAction";
import ResendOtpPage from "./resendOtp";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/testing.css";
import bg from "../../../src/asset/images/bg.png";

const VerifyOtp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading, error, successMessage } = useSelector(
		(state) => state.verifyUserOtpReducerState
	);

	// const handleNavigate = () => {
	// 	navigate("/booking/hair-service");
	// };

	useEffect(() => {
		// Navigate only if OTP verification is successful
		if (successMessage) {
			navigate("/user-dashboard/booking/hair-service");
		}
	}, [successMessage, navigate]);

	return (
		<div className="login-form">
			<div className="container">
				<div className="main">
					<div className="content">
						<h2 style={{ paddingTop: "30px" }}>OTP Verification</h2>
						<Formik
							initialValues={{ otp: "" }}
							validationSchema={Yup.object({
								otp: Yup.string().required("OTP is required"),
							})}
							onSubmit={(values) => {
								dispatch(verifyOtp(values.otp));
								// handleNavigate();
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
									<div style={{ paddingBottom: "40px" }}>
										<label htmlFor="otp">OTP</label>
										<input
											id="otp"
											name="otp"
											type="text"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.otp}
											placeholder="Enter OTP"
										/>
										{touched.otp && errors.otp && (
											<div className="error">{errors.otp}</div>
										)}
										<div
											style={{
												display: "flex",
												justifyContent: "flex-end",
												alignItems: "flex-end",
												width: "100",
												gap: "5px",
											}}
										>
											<span>Did not get an otp? </span>{" "}
											<Link
												to="/resend-otp"
												style={{
													cursor: "pointer",
													color: "red",
												}}
											>
												Resend
											</Link>
										</div>
									</div>

									<button className="btn" type="submit" disabled={loading}>
										{loading ? "Verifying..." : "Verify OTP"}
									</button>

									{error && <div className="error">{error.message}</div>}
									{successMessage && (
										<div className="success">{successMessage}</div>
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
			{/* <ResendOtpPage /> */}
		</div>
	);
};

export default VerifyOtp;
