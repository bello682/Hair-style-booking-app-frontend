import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRequests } from "./../../../../store/action/adminActions/fetchAllBookingRequest";
import moment from "moment";
import DataTable from "react-data-table-component";
import "../../../CSS/adminPages.css"; // Add CSS for your custom modal here
import Loader from "../../../../components/loader";

const AllRequest = () => {
	const dispatch = useDispatch();
	const [filteredData, setFilteredData] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [selectedUser, setSelectedUser] = useState(null); // For showing parent (user) details in modal
	const [selectedBooking, setSelectedBooking] = useState(null); // For showing child (booking request) details in modal
	const [selectedImage, setSelectedImage] = useState(null); // For showing selected image in full view

	// Get bookings from Redux state
	const { bookings, loading, error } = useSelector(
		(state) => state.fetchBookings
	);

	useEffect(() => {
		dispatch(fetchAllRequests());
	}, [dispatch]);

	// Filter function for search
	useEffect(() => {
		if (Array.isArray(bookings?.users)) {
			const lowercasedSearch = searchText.toLowerCase();

			// Filter the bookings array
			const filtered = bookings.users.filter((user) => {
				const isUserMatch =
					user._id && user._id.toLowerCase().includes(lowercasedSearch);
				const matchingRequests = Array.isArray(user.bookingRequests)
					? user.bookingRequests.filter((request) => {
							const requestId = request.id ? request.id.toLowerCase() : "";
							const referenceNumber = request.referenceNumber
								? request.referenceNumber.toLowerCase()
								: "";
							return (
								requestId.includes(lowercasedSearch) ||
								referenceNumber.includes(lowercasedSearch)
							);
					  })
					: [];
				return isUserMatch || matchingRequests.length > 0;
			});

			setFilteredData(filtered);
		}
	}, [searchText, bookings]);

	const handleFilter = (event) => {
		setSearchText(event.target.value);
	};

	const handleUserView = (user) => {
		setSelectedUser(user);
	};

	const handleBookingView = (booking) => {
		setSelectedBooking(booking);
	};

	const closeModal = () => {
		setSelectedUser(null);
		setSelectedBooking(null);
		setSelectedImage(null);
	};

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	const userColumns = [
		{ name: "User ID", selector: (row) => row._id, sortable: true },
		{ name: "Full Name", selector: (row) => row.fullName, sortable: true },
		{ name: "Email", selector: (row) => row.email, sortable: true },
		{
			name: "Actions",
			cell: (row) => (
				<button onClick={() => handleUserView(row)} className="view-button">
					View
				</button>
			),
			ignoreRowClick: true,
			allowOverflow: true,
			button: true,
		},
	];

	const requestColumns = [
		{ name: "Request Id", selector: (row) => row._id },
		{ name: "Reference Number", selector: (row) => row.referenceNumber },
		{ name: "Full Name", selector: (row) => row.fullName },
		{ name: "Status", selector: (row) => row.status },
		{ name: "Service Date", selector: (row) => row.serviceDate },
		{ name: "Service Time", selector: (row) => row.serviceTime },
		{ name: "Requested Date", selector: (row) => row.requestedDate },
	];

	if (loading) {
		return (
			<div className="h-[100vh] items-center justify-center flex flex-col m-auto">
				<Loader />
				<p>Loading...</p>
			</div>
		);
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<div className="main-container-wrapper-requests">
			<h1
				style={{
					textAlign: "center",
					textTransform: "uppercase",
					marginTop: "2rem",
					marginBottom: "2rem",
				}}
			>
				All Booking Requests
			</h1>
			<div
				className="text-end"
				style={{
					display: "flex",
					justifyContent: "flex-end",
					alignItems: "flex-end",
					margin: "0 0 10px 0",
				}}
			>
				<input
					type="text"
					placeholder="Search by User ID or Reference Number..."
					onChange={handleFilter}
					value={searchText}
					style={{
						width: "300px",
						padding: "10px",
						borderRadius: "5px",
						borderColor: "white",
						borderStyle: "solid",
						borderWidth: "1px",
						marginLeft: "10px",
						backgroundColor: "white",
						color: "black",
						fontSize: "12px",
						fontWeight: "bold",
						boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
						transition: "all 0.3s ease-in-out",
					}}
				/>
			</div>

			{filteredData.length > 0 ? (
				<DataTable
					title="Booking Requests"
					columns={userColumns}
					data={filteredData}
					striped
					highlightOnHover
					pagination
					expandableRows
					expandableRowsComponent={({ data }) => (
						<DataTable
							columns={requestColumns}
							data={data.bookingRequests}
							noHeader
							pagination={false}
							striped
						/>
					)}
				/>
			) : (
				<p style={{ fontSize: "3rem", marginTop: "5rem", color: "white" }}>
					No records to display
				</p>
			)}

			{/* Modal for Parent (User) Details with Children Requests */}
			{selectedUser && (
				<div className="modal-overlay" onClick={closeModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<h2>User Details</h2>
						<p>
							<strong>ID:</strong> {selectedUser._id}
						</p>
						<p>
							<strong>Full Name:</strong> {selectedUser.fullName}
						</p>
						<p>
							<strong>Email:</strong> {selectedUser.email}
						</p>
						<p>
							<strong>Phone Number:</strong> {selectedUser.phoneNumber}
						</p>
						<p>
							<strong>Role:</strong> {selectedUser.role}
						</p>
						<p>
							<strong>Status:</strong> {selectedUser.status}
						</p>
						<p>
							<strong>Request Count:</strong> {selectedUser.requestCount}
						</p>

						<h3>Booking Requests</h3>
						<ul>
							{selectedUser.bookingRequests.map((request) => (
								<li
									key={request.id}
									onClick={() => handleBookingView(request)}
									style={{ cursor: "pointer" }}
								>
									<p>
										<strong>Reference Number:</strong> {request.referenceNumber}
									</p>
									<p>
										<strong>Status:</strong> {request.status}
									</p>
								</li>
							))}
						</ul>

						<button onClick={closeModal}>Close</button>
					</div>
				</div>
			)}

			{/* Modal for Individual Booking Request Details */}
			{selectedBooking && (
				<div className="modal-overlay" onClick={closeModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<h2>Booking Request Details</h2>
						<p>
							<strong>Booking ID:</strong> {selectedBooking._id}
						</p>
						<p>
							<strong>Reference Number:</strong>{" "}
							{selectedBooking.referenceNumber}
						</p>
						<p>
							<strong>Status:</strong> {selectedBooking.status}
						</p>
						<p>
							<strong>booked:</strong>{" "}
							{selectedBooking.booked ? "Booked" : "Not Booked"}
						</p>
						<p>
							<strong>Hair-Style Name:</strong> {selectedBooking.hairStyleName}
						</p>
						<p>
							<strong>Service Type:</strong> {selectedBooking.serviceType}
						</p>
						<p>
							<strong>Service Date:</strong> {selectedBooking.serviceDate}
						</p>
						<p>
							<strong>Service Time:</strong> {selectedBooking.serviceTime}
						</p>

						<p>
							<strong>Requested Date:</strong>{" "}
							{moment(selectedBooking.requestedDate).format(
								"MMMM Do YYYY, h:mm:ss a"
							)}
						</p>

						<h3>Hair-Style Images</h3>
						<div style={{ marginTop: "3rem" }}>
							{selectedBooking.hairStyleImages.map((image, index) => (
								<div key={index}>
									<img
										src={image}
										alt={`Hair Style ${index}`}
										style={{
											width: "100px",
											marginRight: "10px",
											cursor: "pointer",
										}}
										onClick={() => handleImageClick(image)}
									/>
									<button onClick={() => handleImageClick(image)}>
										View in Full
									</button>
								</div>
							))}
						</div>

						<button onClick={closeModal}>Close</button>
					</div>
				</div>
			)}

			{/* Modal for Full Image View */}
			{selectedImage && (
				<div className="modal-overlay" onClick={closeModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<img
							src={selectedImage}
							alt="Full View"
							style={{ width: "100%" }}
						/>
						<button onClick={closeModal}>Close</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default AllRequest;
