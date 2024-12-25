import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataStart } from "../../../store/action/userActions/get UserDataActions";
import moment from "moment";
import DataTable from "react-data-table-component";
import "../../CSS/adminPages.css";
import BookingReceipt from "../../../components/bookingReceipt/bookingReceiptPdf";
import Loader from "../../../components/loader";

const UserProfileDataTableStored = () => {
	const dispatch = useDispatch();
	const [filteredData, setFilteredData] = useState();
	const [selectedUser, setSelectedUser] = useState(null); // For showing parent (user) details in modal
	const [selectedBooking, setSelectedBooking] = useState(null); // For showing child (booking request) details in modal
	const [selectedImage, setSelectedImage] = useState(null); // For showing selected image in full view

	const { userDataFectched, loading, error } = useSelector(
		(state) => state.getUserDataFetch
	);

	useEffect(() => {
		dispatch(getUserDataStart());
	}, [dispatch]);

	useEffect(() => {
		if (userDataFectched && userDataFectched.user) {
			const userArray = Array.isArray(userDataFectched.user)
				? userDataFectched.user
				: [userDataFectched.user];
			setFilteredData(userArray);
		} else {
			setFilteredData([]);
		}
	}, [userDataFectched]);

	const handleBookingView = (booking) => {
		setSelectedBooking(booking);
	};

	const closeModal = () => {
		setSelectedUser(null);
		setSelectedBooking(null);
		setSelectedImage(null);
	};

	const handleUserView = (user) => {
		setSelectedUser(user);
	};

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	const userColumns = [
		{ name: "User ID", selector: (row) => row._id, sortable: true },
		{ name: "Full Name", selector: (row) => row.fullName, sortable: true },
		{ name: "Email", selector: (row) => row.email, sortable: true },
		{
			name: "Phone Number",
			selector: (row) => row.phoneNumber,
			sortable: true,
		},
		{
			name: "Actions",
			cell: (row) => (
				<div
					onClick={() => handleUserView(row)}
					//  className="view-button"
				>
					Expandable
				</div>
			),
			ignoreRowClick: true,
			allowOverflow: true,
			button: true,
		},
	];

	const requestColumns = [
		{ name: "Request Id", selector: (row) => row._id },
		{ name: "Reference Number", selector: (row) => row.referenceNumber },
		{ name: "Status", selector: (row) => row.status },
		{ name: "Service Date", selector: (row) => row.serviceDate },
		{ name: "Service Time", selector: (row) => row.serviceTime },
		{ name: "Requested Date", selector: (row) => row.requestDate },
		{ name: "Hair Name", selector: (row) => row.hairStyleName },
		{ name: "Gender", selector: (row) => row.serviceType },
		{
			name: "Actions",
			cell: (row) => (
				<button onClick={() => handleBookingView(row)} className="view-button">
					View
				</button>
			),
			ignoreRowClick: true,
			allowOverflow: true,
			button: true,
		},
	];

	if (loading) {
		return (
			<div style={{ textAlign: "center", marginTop: "5rem" }}>
				<Loader />
				<p>Loading.........</p>
			</div>
		);
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<>
			<div className="main-container-wrapper-requests">
				<h1
					style={{
						textAlign: "center",
						textTransform: "uppercase",
						marginTop: "2rem",
						marginBottom: "2rem",
					}}
				>
					All Booking Requests Table
				</h1>

				{filteredData ? (
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

				{/* Modal for Individual Booking Request Details */}
				{selectedBooking && (
					<div className="modal-overlay" onClick={closeModal}>
						<div className="modal-content" onClick={(e) => e.stopPropagation()}>
							{/* <h2>Booking Request Details</h2> */}

							<BookingReceipt
								bookingId={selectedBooking._id}
								status={selectedBooking.status}
								booking_status={
									selectedBooking.booked ? "Booked" : "Processing"
								}
								request_date={moment(selectedBooking.requestDate).format(
									"MMMM Do YYYY, h:mm:ss a"
								)}
								service_date={moment(selectedBooking.serviceDate).format(
									"MMMM Do YYYY, h:mm:ss a"
								)}
								service_time={selectedBooking.serviceTime}
								reference_number={selectedBooking.referenceNumber}
								service_type={selectedBooking.serviceType}
								hairStyle_name={selectedBooking.hairStyleName}
								description={selectedBooking.description}
								total_amount={selectedBooking.totalAmount}
								fullName={selectedUser?.fullName}
								email={selectedUser?.email}
								phone_number={selectedUser?.phoneNumber}
								viewLargeImage={selectedBooking.hairStyleImages.map(
									(image, index) => (
										<div key={index} onClick={() => handleImageClick(image)}>
											View Image in Full
										</div>
									)
								)}
							/>

							{/* <h3>Hair-Style Images</h3>
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
										View Image in Full
									</button>
								</div>
							))}
						</div> */}

							<button onClick={closeModal}>Close Receipt</button>
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
		</>
	);
};

export default UserProfileDataTableStored;
