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
import AdminCreateNotificationForm from "./pages/admin/adminPages/CreateNotification/createNotification";
import NotificationList from "./pages/users/getNotifications/getNotifications";
import AdminNotificationList from "./pages/admin/adminPages/CreateNotification/adminNotificationList";
import ContactUsPage from "./pages/main-website-pages/contactUs";
import UserReceiptBooked from "./pages/users/userReceiptBooked";
import UserProfileDataTableStored from "./pages/users/dashboard/userProfileDatas";
import DashboardLayout from "./pages/users/dashboard/dashboardComponent/dashboardLayoutView";
import NotFound from "./pages/Error/notFound";
import User_Dashboard_Layout from "./pages/users/dashboard/LAYOUTS/user_dashboard_layout";

function App() {
	const location = useLocation();

	const isAdminPath = location.pathname.includes("/admin");
	const isVerifiedUser = localStorage.getItem("isVerified");

	// this is to check if the user is registered on the database
	const welcomePageUser = isVerifiedUser ? (
		// assumed user dashboard
		<DashboardLayout />
	) : (
		// welcome page
		<WelcomePage />
	);

	// console.log(isVerifiedUser);

	return (
		<>
			<div className="App">
				{!isAdminPath && <HeaderPage />}
				<Routes>
					{/* USER ROUTES */}
					{/* <Route path="/" element={<WelcomePage />} /> */}
					<Route path="/" element={welcomePageUser} />
					<Route path="/user-signUp" element={<UserSignUp />} />
					<Route path="/verify-otp" element={<VerifyOtp />} />
					<Route path="/resend-otp" element={<ResendOtpPage />} />
					<Route path="/booking/hair-service" element={<BookingForm />} />
					<Route path="/tour-our-services" element={<GetAllImagesTour />} />
					<Route path="/contact-us" element={<ContactUsPage />} />
					<Route path="/booking-receipt" element={<UserReceiptBooked />} />

					{/* USER DASHBOARDS LINKS */}

					<Route index path="/user-dashboard" element={<DashboardLayout />} />
					<Route path="/analytics" element={<h1>Analytics</h1>} />
					<Route path="/reports" element={<h1>Reports</h1>} />
					<Route path="/customers" element={<h1>Customers</h1>} />
					<Route path="/new-customer" element={<h1>New Customer</h1>} />
					<Route
						path="/verified-customers"
						element={<h1>Verified Customers</h1>}
					/>
					<Route path="/products" element={<h1>Products</h1>} />
					<Route path="/new-product" element={<h1>New Product</h1>} />
					<Route path="/inventory" element={<h1>Inventory</h1>} />
					<Route path="/settings" element={<h1>Settings</h1>} />
					<Route
						path="/User-profiler-page"
						element={<UserProfileDataTableStored />}
					/>
					{/* USER DASHBOARDS LINKS ENDS HERE */}

					{/* USER GET NOTIFICATIONS FROM ADMIN */}
					<Route path="/GET-NOTIFICATION" element={<NotificationList />} />

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
					{/* ADMIN CREATE NOTIFICATION  PAGES */}
					<Route
						path="admin-create-notification"
						element={<AdminCreateNotificationForm />}
					/>
					{/* ADMIN GET NOTIFICATIONS FROM ADMIN */}
					<Route
						path="admin-get-notification"
						element={<AdminNotificationList />}
					/>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>

			{/* const BASE_URL = process.env.REACT_APP_BASE_URL || "https://hair-style-booking-app-backend.onrender.com"; */}
		</>
	);
}

export default App;
