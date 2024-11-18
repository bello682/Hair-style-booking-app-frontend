// import "./App.css";
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// 	Navigate,
// } from "react-router-dom";
// import UserSignUp from "./pages/users/signUp";
// import VerifyOtp from "./pages/users/verificationUserOtp";
// import RefreshTokenHandler from "./pages/users/refreshTokenAuth";
// import BookingForm from "./pages/users/bookingRequest";
// import AdminSignUp from "./pages/admin/adminSignUp";
// import AdminVerifyOtp from "./pages/admin/verifyOtp";
// import AdminResendOtpPage from "./pages/admin/resendOtp";
// import AdminLoginForm from "./pages/admin/signInAdmin";
// import WelcomePage from "./pages/main-website-pages/welcomePage";
// import HeaderPage from "./pages/main-website-pages/headerFooter/header";
// import ResendOtpPage from "./pages/users/resendOtp";
// import Admin_App_Layout from "./pages/admin/adminPages/Admin-Export-App";

// function App() {
// 	return (
// 		<>
// 			<div className="App">
// 				<HeaderPage />
// 				<Router>
// 					<Routes>
// 						{/** USER SIDE NAVIGATION */}
// 						<Route path="/" element={<WelcomePage />} />
// 						<Route path="/user-signUp" element={<UserSignUp />} />
// 						<Route path="/verify-otp" element={<VerifyOtp />} />
// 						<Route path="/resend-otp" element={<ResendOtpPage />} />
// 						<Route path="/booking/hair-service" element={<BookingForm />} />
// 						{/* <Route path="/refresh-token" element={<RefreshTokenHandler />} /> */}

// 						{/** ADMIN SIDE NAVIGATION */}
// 						<Route path="/admin-register" element={<AdminSignUp />} />
// 						<Route path="/admin-verification" element={<AdminVerifyOtp />} />
// 						<Route path="/admin-Resend-otp" element={<AdminResendOtpPage />} />
// 						<Route path="/admin-login" element={<AdminLoginForm />} />
// 						<Route path="/admin-dashboard" element={<Admin_App_Layout />} />

// 						<Route path="*" element={<div>404 - Page not found</div>} />
// 					</Routes>
// 				</Router>
// 			</div>
// 		</>
// 	);
// }

// export default App;

//

import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useLocation,
} from "react-router-dom";
import UserSignUp from "./pages/users/signUp";
import VerifyOtp from "./pages/users/verificationUserOtp";
import BookingForm from "./pages/users/bookingRequest";
import AdminSignUp from "./pages/admin/adminSignUp";
import AdminVerifyOtp from "./pages/admin/verifyOtp";
import AdminResendOtpPage from "./pages/admin/resendOtp";
import AdminLoginForm from "./pages/admin/signInAdmin";
import WelcomePage from "./pages/main-website-pages/welcomePage";
import HeaderPage from "./pages/main-website-pages/headerFooter/header";
import ResendOtpPage from "./pages/users/resendOtp";
import Admin_App_Layout from "./pages/admin/adminPages/Admin-Export-App";
import AcceptedRequest from "./pages/admin/adminPages/admin-actions-pages/acceptedRequest";
import AllRequest from "./pages/admin/adminPages/admin-actions-pages/allRequest";
import CompletedRequest from "./pages/admin/adminPages/admin-actions-pages/completedRequest";
import RejectedRequest from "./pages/admin/adminPages/admin-actions-pages/rejectedRequest";
import PendingRequest from "./pages/admin/adminPages/admin-actions-pages/pendingRequest";
import DeletedRequest from "./pages/admin/adminPages/admin-actions-pages/deletedRequest";
import NewRequests from "./pages/admin/adminPages/admin-actions-pages/newRequests";
import MaleUploads from "./pages/admin/adminUploads/maleUploads";
import FemaleUploads from "./pages/admin/adminUploads/femaleUploads";
import OthersUploads from "./pages/admin/adminUploads/othersUploads";
import GetAllImagesTour from "./pages/main-website-pages/getAllImagesTour";

function App() {
	const location = useLocation();

	const isAdminPath = location.pathname.includes("/admin");

	return (
		<>
			<div className="App">
				{!isAdminPath && <HeaderPage />}
				<Routes>
					{/* USER ROUTES */}
					<Route path="/" element={<WelcomePage />} />
					<Route path="/user-signUp" element={<UserSignUp />} />
					<Route path="/verify-otp" element={<VerifyOtp />} />
					<Route path="/resend-otp" element={<ResendOtpPage />} />
					<Route path="/booking/hair-service" element={<BookingForm />} />
					<Route path="/tour-our-services" element={<GetAllImagesTour />} />

					{/* ADMIN ROUTES */}
					<Route path="/admin-register" element={<AdminSignUp />} />
					<Route path="/admin-verification" element={<AdminVerifyOtp />} />
					<Route path="/admin-Resend-otp" element={<AdminResendOtpPage />} />
					<Route path="/admin-login" element={<AdminLoginForm />} />

					{/* ADMIN ACTIONS PAGES */}
					<Route path="/admin-dashboard" element={<Admin_App_Layout />} />
					<Route path="admin-all-requests" element={<AllRequest />} />
					<Route path="admin-new-requests" element={<NewRequests />} />
					<Route path="admin-accepted-requests" element={<AcceptedRequest />} />
					<Route
						path="admin-completed-requests"
						element={<CompletedRequest />}
					/>
					<Route path="admin-rejected-requests" element={<RejectedRequest />} />
					<Route path="admin-pending-requests" element={<PendingRequest />} />
					<Route path="admin-deleted-requests" element={<DeletedRequest />} />

					{/* ADMIN UPLOADS IMAGES  PAGES */}
					<Route path="admin-male-uploads" element={<MaleUploads />} />
					<Route path="admin-female-uploads" element={<FemaleUploads />} />
					<Route path="admin-others-uploads" element={<OthersUploads />} />
					<Route path="*" element={<div>404 - Page not found</div>} />
				</Routes>
			</div>
		</>
	);
}

export default App;
