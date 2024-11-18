import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRequests } from "./../../../../store/action/adminActions/fetchAllBookingRequest";
import "../../../CSS/adminPages.css";
import moment from "moment";
import { deleteBookingRequestByAdmin } from "../../../../store/action/adminActions/adminActionRequest-Action";

const RejectedRequest = () => {
	const dispatch = useDispatch();
	const { bookings, loading, error } = useSelector(
		(state) => state.fetchBookings
	);

	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [selectedBooking, setSelectedBooking] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [largeImage, setLargeImage] = useState(null);

	useEffect(() => {
		dispatch(fetchAllRequests());
	}, [dispatch]);

	useEffect(() => {
		if (Array.isArray(bookings?.users)) {
			const acceptedRequests = bookings.users.flatMap((user) => {
				return Array.isArray(user?.bookingRequests)
					? user.bookingRequests
							.filter((request) => request.status === "rejected")
							.map((request) => ({ ...request, user })) // Attach user data
					: [];
			});
			setData(acceptedRequests);
			setFilteredData(acceptedRequests); // Initialize filtered data
		}
	}, [bookings]);

	const handleFilter = (event) => {
		const searchText = event.target.value.toLowerCase();
		const filteredData = data.filter(
			(item) =>
				(item.referenceNumber &&
					item.referenceNumber.toLowerCase().includes(searchText)) ||
				(item.status && item.status.toLowerCase().includes(searchText))
		);
		setFilteredData(filteredData); // Update only filtered data
	};

	const handleView = (booking) => {
		setSelectedBooking(booking);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedBooking(null);
		setLargeImage(null);
	};

	const viewImageLarger = (imageUrl) => {
		setLargeImage(imageUrl);
	};

	const handleDelete = () => {
		const adminId = localStorage.getItem("adminId");
		dispatch(deleteBookingRequestByAdmin(adminId, selectedBooking._id));
		closeModal();
	};

	return (
		<div className="main-container-wrapper-requests">
			<h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
				Rejected Booking Requests
			</h1>
			<div
				className="text-end"
				style={{
					display: "flex",
					justifyContent: "flex-end",
					marginBottom: "10px",
				}}
			>
				<input
					type="text"
					placeholder="Search..."
					onChange={handleFilter}
					style={{
						width: "300px",
						padding: "10px",
						borderRadius: "5px",
						backgroundColor: "white",
						color: "black",
						fontSize: "16px",
						fontWeight: "bold",
					}}
				/>
			</div>

			<div className="table-wrapper" style={{ overflow: "scroll" }}>
				<table className="custom-table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Reference Number</th>
							<th>Status</th>
							<th>Request Date</th>
							<th>Service Date</th>
							<th>Service Time</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{filteredData.map((row, index) => (
							<tr key={index}>
								<td>{row._id}</td>
								<td>{row.referenceNumber}</td>
								<td>{row.status}</td>
								<td>{row.requestDate}</td>
								<td>{row.serviceDate}</td>
								<td>{row.serviceTime}</td>
								<td>
									<button
										onClick={() => handleView(row)}
										className="button_request_view"
									>
										View
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Modal for viewing details */}
			{isModalOpen && selectedBooking && (
				<div className="modal-overlay" onClick={closeModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<h2>Booking Details</h2>
						<p>
							<strong>User Name:</strong> {selectedBooking.user.fullName}
						</p>
						<p>
							<strong>User Email:</strong>
							{selectedBooking.user.email}
						</p>
						<p>
							<strong>ID:</strong> {selectedBooking._id}
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
							<strong>Request Date:</strong>{" "}
							{moment(selectedBooking.requestedDate).format(
								"MMMM Do YYYY, h:mm:ss a"
							)}
						</p>
						<p>
							<strong>Service Date:</strong>
							{moment(selectedBooking.serviceDate).format(
								"MMMM Do YYYY, h:mm:ss a"
							)}
						</p>
						<p>
							<strong>Service Time:</strong> {selectedBooking.serviceTime}
						</p>

						<h3>Hair-Style Images</h3>
						<div className="image-gallery" style={{ marginTop: "3rem" }}>
							{selectedBooking.hairStyleImages &&
								selectedBooking.hairStyleImages.map((image, idx) => (
									<div key={idx} className="image-thumbnail">
										<img
											src={image}
											alt={`Image ${idx + 1}`}
											onClick={() => viewImageLarger(image)}
											style={{
												width: "100px",
												marginRight: "10px",
												cursor: "pointer",
											}}
										/>
										<button onClick={() => viewImageLarger(image)}>
											View Larger
										</button>
									</div>
								))}
						</div>
						<button className="close-button" onClick={closeModal}>
							close
						</button>

						<button onClick={handleDelete}>Delete</button>
					</div>
				</div>
			)}

			{/* Modal for viewing image in larger format */}
			{largeImage && (
				<div className="modal-overlay">
					<div className="modal-content">
						<img src={largeImage} alt="Larger view" style={{ width: "100%" }} />
						<button className="close-button" onClick={closeModal}>
							close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default RejectedRequest;
