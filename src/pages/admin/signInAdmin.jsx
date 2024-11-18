// // AdminLoginForm.js
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useDispatch, useSelector } from "react-redux";
// import * as Yup from "yup";
// import { loginAdminAction } from "./../../store/action/adminActions/login&outAction";
// import AdminLogout from "./logoutAdmin";

// const AdminLoginForm = () => {
// 	const dispatch = useDispatch();
// 	const { loading, error } = useSelector((state) => state.loginOutReducerState);

// 	// validationSchemas.js

// 	const loginValidationSchema = Yup.object().shape({
// 		email: Yup.string()
// 			.email("Invalid email format")
// 			.required("Email is required"),
// 		password: Yup.string().required("Password is required"),
// 	});

// 	const handleSubmit = (values, { setSubmitting }) => {
// 		dispatch(loginAdminAction(values.email, values.password));
// 		setSubmitting(false);
// 	};

// 	return (
// 		<>
// 			<Formik
// 				initialValues={{ email: "", password: "" }}
// 				validationSchema={loginValidationSchema}
// 				onSubmit={handleSubmit}
// 			>
// 				{({ isSubmitting }) => (
// 					<Form>
// 						<div>
// 							<label htmlFor="email">Email</label>
// 							<Field type="email" name="email" id="email" />
// 							<ErrorMessage name="email" component="div" />
// 						</div>

// 						<div>
// 							<label htmlFor="password">Password</label>
// 							<Field type="password" name="password" id="password" />
// 							<ErrorMessage name="password" component="div" />
// 						</div>

// 						<button type="submit" disabled={isSubmitting || loading}>
// 							{loading ? "Logging in..." : "Login"}
// 						</button>

// 						{error && <div className="error">{error}</div>}
// 					</Form>
// 				)}
// 			</Formik>

// 			<AdminLogout />
// 		</>
// 	);
// };

// export default AdminLoginForm;
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { loginAdminAction } from "./../../store/action/adminActions/login&outAction";
import AdminLogout from "./logoutAdmin";
import bg from "../../asset/images/bg.png";
import "../CSS/testing.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AdminLoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading, error } = useSelector((state) => state.loginOutReducerState);

	const loginValidationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		password: Yup.string().required("Password is required"),
	});

	const handleSubmit = (values, { setSubmitting }) => {
		dispatch(loginAdminAction(values.email, values.password));
		setSubmitting(false);
		navigate("/admin-dashboard");
	};

	return (
		<div className="login-form">
			<div className="container">
				<div className="main">
					<div className="content">
						<h2>Admin Login</h2>
						<Formik
							initialValues={{ email: "", password: "" }}
							validationSchema={loginValidationSchema}
							onSubmit={handleSubmit}
						>
							{({ isSubmitting }) => (
								<Form>
									<div>
										<Field
											type="email"
											name="email"
											placeholder="Email"
											className="input-field"
										/>
										<ErrorMessage
											name="email"
											component="div"
											className="error"
										/>
									</div>

									<div>
										<Field
											type="password"
											name="password"
											placeholder="Password"
											className="input-field"
										/>
										<ErrorMessage
											name="password"
											component="div"
											className="error"
										/>
									</div>

									<button
										className="btn"
										type="submit"
										disabled={isSubmitting || loading}
									>
										{loading ? "Logging in..." : "Login"}
									</button>

									{error && <div className="error">{error}</div>}

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
										<span>Don't have an account yet?</span>{" "}
										<Link
											to="/admin-register"
											style={{
												cursor: "pointer",
												color: "red",
											}}
										>
											Sign Up
										</Link>
									</div>
								</Form>
							)}
						</Formik>
					</div>
					<div className="form-img">
						<img src={bg} alt="Background" />
					</div>
				</div>
			</div>

			{/* <AdminLogout /> */}
		</div>
	);
};

export default AdminLoginForm;
