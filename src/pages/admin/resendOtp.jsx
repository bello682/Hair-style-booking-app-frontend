// import React from "react";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { adminResendOtp } from "./../../store/action/adminActions/adminResendOtpAction";

// const AdminResendOtpPage = () => {
// 	const dispatch = useDispatch();
// 	const { loading, message, error } = useSelector(
// 		(state) => state.adminResendOtpReducerState
// 	);

// 	const initialValues = { email: "" };
// 	const validationSchema = Yup.object({
// 		email: Yup.string()
// 			.email("Invalid email format")
// 			.required("Email is required"),
// 	});

// 	const handleSubmit = (values) => {
// 		dispatch(adminResendOtp(values.email));
// 	};

// 	console.log(error);
// 	return (
// 		<div>
// 			<h2>Resend OTP</h2>
// 			<Formik
// 				initialValues={initialValues}
// 				validationSchema={validationSchema}
// 				onSubmit={handleSubmit}
// 			>
// 				{({ errors, touched }) => (
// 					<Form>
// 						<div>
// 							<label>Email:</label>
// 							<Field type="email" name="email" />
// 							{touched.email && errors.email ? <div>{errors.email}</div> : null}
// 						</div>
// 						<button type="submit" disabled={loading}>
// 							{loading ? "Resending..." : "Resend OTP"}
// 						</button>
// 					</Form>
// 				)}
// 			</Formik>
// 			{message && <p>{message}</p>}
// 			{error && <p>{error}</p>}
// 		</div>
// 	);
// };

// export default AdminResendOtpPage;

// src/pages/AdminResendOtpPage.js
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { adminResendOtp } from "../../store/action/adminActions/adminResendOtpAction";
import "../CSS/testing.css";
import bg from "../../../src/asset/images/bg.png";

const AdminResendOtpPage = () => {
	const dispatch = useDispatch();
	const { loading, message, error } = useSelector(
		(state) => state.adminResendOtpReducerState
	);

	const initialValues = { email: "" };
	const validationSchema = Yup.object({
		email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
	});

	const handleSubmit = (values) => {
		dispatch(adminResendOtp(values.email));
	};

	return (
		<div className="login-form">
			<div className="container">
				<div className="main">
					<div className="content">
						<h2 style={{ paddingTop: "30px" }}>Resend OTP</h2>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							{({ errors, touched }) => (
								<Form>
									<div style={{ paddingBottom: "40px" }}>
										<label htmlFor="email">Email:</label>
										<Field
											type="email"
											name="email"
											id="email"
											placeholder="Enter your email"
											className={
												touched.email && errors.email ? "input-error" : ""
											}
										/>
										{touched.email && errors.email && (
											<div className="error">{errors.email}</div>
										)}
									</div>

									<button className="btn" type="submit" disabled={loading}>
										{loading ? "Resending..." : "Resend OTP"}
									</button>
								</Form>
							)}
						</Formik>

						{message && <p className="success">{message}</p>}
						{error && <p className="error">{error}</p>}
					</div>
					<div className="form-img">
						<img src={bg} alt="Background" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminResendOtpPage;
