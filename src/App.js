// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// 	Navigate,
// 	useLocation,
// } from "react-router-dom";
// import UserSignUp from "./pages/users/signUp";
// import VerifyOtp from "./pages/users/verificationUserOtp";
// import BookingForm from "./pages/users/bookingRequest";
// import AdminSignUp from "./pages/admin/adminSignUp";
// import AdminVerifyOtp from "./pages/admin/verifyOtp";
// import AdminResendOtpPage from "./pages/admin/resendOtp";
// import AdminLoginForm from "./pages/admin/signInAdmin";
// import WelcomePage from "./pages/main-website-pages/welcomePage";
// import HeaderPage from "./pages/main-website-pages/headerFooter/header";
// import ResendOtpPage from "./pages/users/resendOtp";
// import Admin_App_Layout from "./pages/admin/adminPages/Admin-Export-App";
// import AcceptedRequest from "./pages/admin/adminPages/admin-actions-pages/acceptedRequest";
// import AllRequest from "./pages/admin/adminPages/admin-actions-pages/allRequest";
// import CompletedRequest from "./pages/admin/adminPages/admin-actions-pages/completedRequest";
// import RejectedRequest from "./pages/admin/adminPages/admin-actions-pages/rejectedRequest";
// import PendingRequest from "./pages/admin/adminPages/admin-actions-pages/pendingRequest";
// import DeletedRequest from "./pages/admin/adminPages/admin-actions-pages/deletedRequest";
// import NewRequests from "./pages/admin/adminPages/admin-actions-pages/newRequests";
// import MaleUploads from "./pages/admin/adminUploads/maleUploads";
// import FemaleUploads from "./pages/admin/adminUploads/femaleUploads";
// import OthersUploads from "./pages/admin/adminUploads/othersUploads";
// import GetAllImagesTour from "./pages/main-website-pages/getAllImagesTour";
// import AdminCreateNotificationForm from "./pages/admin/adminPages/CreateNotification/createNotification";
// import NotificationList from "./pages/users/getNotifications/getNotifications";
// import AdminNotificationList from "./pages/admin/adminPages/CreateNotification/adminNotificationList";
// import ContactUsPage from "./pages/main-website-pages/contactUs";
// import UserReceiptBooked from "./pages/users/userReceiptBooked";
// import NotFound from "./pages/Error/notFound";
// import Users_Dashboard from "./pages/users/dashboard/PAGES/users_dashboard";
// import DashBoard_main from "./pages/users/dashboard/LAYOUTS/main_user_dashboard";
// import UserProfileDataTableStored from "./pages/users/dashboard/userProfileDatas";

// function App() {
// 	const location = useLocation();

// 	const isAdminPath = location.pathname.includes("/admin");
// 	const isVerifiedUser = localStorage.getItem("isVerified");

// 	// this is to check if the user is registered on the database
// 	const welcomePageUser = !isVerifiedUser ? (
// 		// assumed user dashboard
// 		<Users_Dashboard />
// 	) : (
// 		// welcome page
// 		<WelcomePage />
// 	);

// 	// console.log(isVerifiedUser);

// 	return (
// 		<>
// 			<div className="App">
// 				{/* if the the path name is or the current page is the admin side then there should be an header page  */}
// 				{/* {!isAdminPath && <HeaderPage />} */}
// 				<Routes>
// 					{/* USER ROUTES */}
// 					{/* <Route path="/" element={<WelcomePage />} /> */}
// 					<Route path="/" element={welcomePageUser} />
// 					<Route path="/user-signUp" element={<UserSignUp />} />
// 					<Route path="/verify-otp" element={<VerifyOtp />} />
// 					<Route path="/resend-otp" element={<ResendOtpPage />} />
// 					<Route path="/booking/hair-service" element={<BookingForm />} />
// 					<Route path="/tour-our-services" element={<GetAllImagesTour />} />
// 					<Route path="/contact-us" element={<ContactUsPage />} />
// 					<Route path="/booking-receipt" element={<UserReceiptBooked />} />

// 					{/* USER DASHBOARDS LINKS */}

// 					{/* <Route index path="/user-dashboard/*" element={<Users_Dashboard />} /> */}
// 					{/* <Route path="/user-dashboard" element={<Users_Dashboard />}> */}
// 					<Route path="/" element={<Users_Dashboard />}> {/* this is the main user dashboard we re using the path="/" instead of it own path="/user-dashboard" because we are checking if the user is registerd then the user will have the dashboard on their screen instead of having the home landing page so dashboard will be the landing if registered and if not registered home landing page will be the original home page to see always    */}
// 						{/* all this re nested and replace in where they need to be seen as oulLet is use to render eir routes inside the <ContentDisplayView/> */}
// 						<Route
// 							// path="main-user-dashboard-data"
// 							index
// 							element={<DashBoard_main />}
// 						/>
// 						<Route
// 							path="User-profiler-page"
// 							element={<UserProfileDataTableStored />}
// 						/>
// 						<Route path="Customers" element={<h1>Customers</h1>} />
// 						<Route path="Analytics" element={<h1>Analytics</h1>} />
// 						<Route path="Messages" element={<h1>Messages</h1>} />
// 						<Route path="Products" element={<h1>Products</h1>} />
// 						<Route path="Reports" element={<h1>Reports</h1>} />
// 						<Route path="settings" element={<h1>Settings</h1>} />
// 						<Route path="AddProducts" element={<h1>Add Products</h1>} />
// 						<Route path="Logout" element={<h1>Logout</h1>} />
// 					</Route>

// 					{/* USER DASHBOARDS LINKS ENDS HERE */}

// 					{/* ================================ ADMIN DASHBOARDS LINKS ================================ */}

// 					{/* USER GET NOTIFICATIONS FROM ADMIN */}
// 					<Route path="/GET-NOTIFICATION" element={<NotificationList />} />

// 					{/* ADMIN ROUTES */}
// 					<Route path="/admin-register" element={<AdminSignUp />} />
// 					<Route path="/admin-verification" element={<AdminVerifyOtp />} />
// 					<Route path="/admin-Resend-otp" element={<AdminResendOtpPage />} />
// 					<Route path="/admin-login" element={<AdminLoginForm />} />

// 					{/* ADMIN ACTIONS PAGES */}
// 					<Route path="/admin-dashboard" element={<Admin_App_Layout />} />
// 					<Route path="admin-all-requests" element={<AllRequest />} />
// 					<Route path="admin-new-requests" element={<NewRequests />} />
// 					<Route path="admin-accepted-requests" element={<AcceptedRequest />} />
// 					<Route
// 						path="admin-completed-requests"
// 						element={<CompletedRequest />}
// 					/>
// 					<Route path="admin-rejected-requests" element={<RejectedRequest />} />
// 					<Route path="admin-pending-requests" element={<PendingRequest />} />
// 					<Route path="admin-deleted-requests" element={<DeletedRequest />} />

// 					{/* ADMIN UPLOADS IMAGES  PAGES */}
// 					<Route path="admin-male-uploads" element={<MaleUploads />} />
// 					<Route path="admin-female-uploads" element={<FemaleUploads />} />
// 					<Route path="admin-others-uploads" element={<OthersUploads />} />
// 					{/* ADMIN CREATE NOTIFICATION  PAGES */}
// 					<Route
// 						path="admin-create-notification"
// 						element={<AdminCreateNotificationForm />}
// 					/>
// 					{/* ADMIN GET NOTIFICATIONS FROM ADMIN */}
// 					<Route
// 						path="admin-get-notification"
// 						element={<AdminNotificationList />}
// 					/>
// 					{/* ================================ ADMIN DASHBOARDS LINKS ENDS HERE ================================ */}

// 					<Route path="*" element={<NotFound />} />
// 				</Routes>
// 			</div>

// 			{/* const BASE_URL = process.env.REACT_APP_BASE_URL || "https://hair-style-booking-app-backend.onrender.com"; */}
// 		</>
// 	);
// }

// export default App;

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
import NotFound from "./pages/Error/notFound";
import Users_Dashboard from "./pages/users/dashboard/PAGES/users_dashboard";
import DashBoard_main from "./pages/users/dashboard/LAYOUTS/main_user_dashboard";
import UserProfileDataTableStored from "./pages/users/dashboard/userProfileDatas";
import AdminDashboardLayoutWrapperShowExport from "./pages/admin/adminPages/adminDashboardLayoutWrapper";
import AdminHomePage from "./pages/admin/adminPages/adminHomePage";

function App() {
	const location = useLocation();

	const isAdminPath =
		location.pathname.includes("/admin") || location.pathname.includes("/user");
	{
		/* this is to check if the current path is an admin path or user path so that we can conditionally render the header page which is the navbar, so i have to be careful not to name any path that i want the headerPgae to show with user or admin */
	}
	const isVerifiedUser = localStorage.getItem("isVerified");

	return (
		<>
			<div className="App">
				{/* if the the path name is or the current page is not admin side then there should be an header page  */}
				{!isAdminPath && <HeaderPage />}
				<Routes>
					{/* USER ROUTES */}
					<Route path="/" element={<WelcomePage />} />
					<Route path="/user-signUp" element={<UserSignUp />} />
					<Route path="/verify-otp" element={<VerifyOtp />} />
					<Route path="/resend-otp" element={<ResendOtpPage />} />
					{/* <Route path="/booking/hair-service" element={<BookingForm />} /> */}
					<Route path="/tour-our-services" element={<GetAllImagesTour />} />
					<Route path="/contact-us" element={<ContactUsPage />} />
					<Route path="/booking-receipt" element={<UserReceiptBooked />} />

					{/* USER GET NOTIFICATIONS FROM ADMIN */}
					<Route path="/GET-NOTIFICATION" element={<NotificationList />} />

					{/* USER DASHBOARDS LINKS */}

					{/* <Route index path="/user-dashboard/*" element={<Users_Dashboard />} /> */}
					<Route path="/user-dashboard" element={<Users_Dashboard />}>
						{/* all this re nested and replace in where they need to be seen as oulLet is use to render eir routes inside the <ContentDisplayView/> */}
						<Route
							// path="main-user-dashboard-data"
							index
							element={<DashBoard_main />}
						/>
						<Route
							path="User-profiler-page"
							element={<UserProfileDataTableStored />}
						/>
						<Route path="booking/hair-service" element={<BookingForm />} />
						{/* <Route
							path="booking/hair-service"
							element={
								<h1 className="text-zinc-950 text-5xl">/user-dashboard</h1>
							}
						/> */}
						<Route
							path="Customers"
							element={<h1 className="text-zinc-950 text-5xl">Customers</h1>}
						/>
						<Route
							path="Analytics"
							element={<h1 className="text-zinc-950 text-5xl">Analytics</h1>}
						/>

						<Route
							path="Messages"
							element={<h1 className="text-zinc-950 text-5xl">Messages</h1>}
						/>
						<Route
							path="Products"
							element={<h1 className="text-zinc-950 text-5xl">Products</h1>}
						/>
						<Route
							path="Reports"
							element={<h1 className="text-zinc-950 text-5xl">Reports</h1>}
						/>
						<Route
							path="settings"
							element={<h1 className="text-zinc-950 text-5xl">Settings</h1>}
						/>
						<Route
							path="AddProducts"
							element={<h1 className="text-zinc-950 text-5xl">Add Products</h1>}
						/>
						<Route
							path="Logout"
							element={<h1 className="text-zinc-950 text-5xl">Logout</h1>}
						/>
					</Route>

					{/* USER DASHBOARDS LINKS ENDS HERE */}

					{/* ================================ ADMIN DASHBOARDS LINKS ================================ */}

					{/* ADMIN ROUTES */}
					<Route path="/admin-register" element={<AdminSignUp />} />
					<Route path="/admin-verification" element={<AdminVerifyOtp />} />
					<Route path="/admin-Resend-otp" element={<AdminResendOtpPage />} />
					<Route path="/admin-login" element={<AdminLoginForm />} />

					{/* ADMIN ACTIONS PAGES */}
					<Route
						path="/admin-dashboard"
						element={<AdminDashboardLayoutWrapperShowExport />}
					>
						<Route
							index
							// path="admin-dashboard-admin"
							element={<AdminHomePage />}
						/>
						<Route path="admin-all-requests" element={<AllRequest />} />
						<Route path="admin-new-requests" element={<NewRequests />} />
						<Route
							path="admin-accepted-requests"
							element={<AcceptedRequest />}
						/>
						<Route
							path="admin-completed-requests"
							element={<CompletedRequest />}
						/>
						<Route
							path="admin-rejected-requests"
							element={<RejectedRequest />}
						/>
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
					</Route>

					{/* ================================ ADMIN DASHBOARDS LINKS ENDS HERE ================================ */}

					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>

			{/* const BASE_URL = process.env.REACT_APP_BASE_URL || "https://hair-style-booking-app-backend.onrender.com"; */}
		</>
	);
}

export default App;
