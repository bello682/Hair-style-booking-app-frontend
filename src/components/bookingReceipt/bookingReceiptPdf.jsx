import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";
import "../../pages/CSS/bookingReceiptpdf.css";
import imageLogoreceipt from "../../asset/images/websiteLogo.png";

const BookingReceipt = ({
	status,
	booking_status,
	request_date,
	service_date,
	service_time,
	reference_number,
	service_type,
	hairStyle_name,
	description,
	fullName,
	email,
	phone_number,
	viewLargeImage,
	handleLargeImage,
}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const formRef = useRef();

	const handleDownload = () => {
		const input = formRef.current;
		html2canvas(input).then((canvas) => {
			const imgData = canvas.toDataURL("image/png");
			const pdf = new jsPDF();
			pdf.addImage(imgData, "PNG", 0, 0);
			pdf.save("Booking-Receipt.pdf");
		});
	};

	const handleBackHome = () => {
		navigate("/");
	};

	return (
		<>
			<section className="section_wrapper" ref={formRef}>
				<div className="cos_mail">
					<p>Albertsons</p>
					<p>
						<a href="https://hair-style-booking-app-frontend.vercel.app/">
							Albertsons.com
						</a>
					</p>
				</div>
				<section
					className="transaction_details_modal_receipt "
					style={{ width: "97%", margin: "auto" }}
				>
					<div className="logo_address">
						<div className="logo___receipt___">
							<img
								src={imageLogoreceipt}
								alt="logo"
								className="receipt__logo_img"
							/>
						</div>
						<p>No 190, Lekki Way, Lagos, Nigeria.</p>
						<p>Email: Albertsonscustomer@gmail.com</p>
						<p>Phone: (+234) 803 778 737, (+234) 907 646 999 </p>
					</div>
					<div className="transaction_info">
						<div>
							<h1 className="text-center text-10">{fullName}</h1>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								margin: "auto",
							}}
						>
							<div className="check_div">
								<FaCheck className="check" />
							</div>{" "}
							<span className="success_text">{status}</span>
						</div>
						<div className="amount_aud">
							{/* <p>Full Name</p> */}
							{/* <p>{fullName}</p> */}
						</div>
					</div>
					<div className="table_transaction_user_info">
						<div className="table_info">
							<h2>Booking Details</h2>
							<table>
								<tr>
									<td>Reference Number</td>
									<td>
										<div className="transaction_result">
											<p>{reference_number}</p>
										</div>
									</td>
								</tr>
								<tr>
									<td>Booking Status</td>
									<td>
										<div className="transaction_result">
											<p>{booking_status}</p>
										</div>
									</td>
								</tr>

								<tr>
									<td>Hair Style Name</td>
									<td>
										<div className="transaction_result">
											<p>{hairStyle_name}</p>
										</div>
									</td>
								</tr>
								<tr>
									<td>Email</td>
									<td>
										<div className="transaction_result">
											<p>{email}</p>
										</div>
									</td>
								</tr>

								<tr>
									<td className="td__1">Phone Number</td>
									<td className="td__2">
										<div className="transaction_result">
											<p>{phone_number}</p>
										</div>
									</td>
								</tr>

								<tr>
									<td>Gender</td>
									<td>
										<div className="transaction_result">
											<p>{service_type}</p>
										</div>
									</td>
								</tr>
								<tr>
									<td>Description</td>
									<td>
										<div className="transaction_result">
											<p>{description}</p>
										</div>
									</td>
								</tr>
								<tr>
									<td>Requested Date</td>
									<td>
										<div className="transaction_result">
											<p>{request_date}</p>
										</div>
									</td>
								</tr>
								<tr>
									<td>Service Date </td>
									<td>
										<div className="transaction_result">
											<p>{service_date}</p>
										</div>
									</td>
								</tr>
								<tr>
									<td>Service Time </td>
									<td>
										<div className="transaction_result">
											<p>{service_time} </p>
										</div>
									</td>
								</tr>
							</table>
						</div>
					</div>

					<div className="note">
						<h2>Note</h2>
						<p>
							Payment must come from the Requested user's account only, kindly
							input only your transaction reference number in your payment
							description to avoid delay in your transaction, your transaction
							reference number is
						</p>
					</div>
				</section>

				<div className="footer_receipt_transaction">
					<small>2024 Albertsons | All Rights Reserved</small>
				</div>
			</section>
			<div className="btn_share">
				<button onClick={handleDownload}>Download Receipt</button>
				<button onClick={handleBackHome}>Back to Home Page</button>
				<button onClick={handleLargeImage}>{viewLargeImage}</button>
			</div>
		</>
	);
};

export default BookingReceipt;
