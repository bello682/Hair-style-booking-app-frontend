import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaCheck } from "react-icons/fa6";
import "../../pages/CSS/bookingReceiptpdf.css";
import imageLogoreceipt from "../../asset/images/websiteLogo.png";

const BookingReceipt = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<>
			<section className="section_wrapper">
				<div className="cos_mail">
					<p>Albertsons</p>
					<p>
						<a href="https://vercel.com/bello-adetayo-olamijis-projects/hair-style-booking-app-frontend">
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
						<p>
							Level 14, 3 Parramatta Square, 153 Macquarie Street Parramatta NSW
							2150.
						</p>
						<p>Email: admin@cosmoremit.com.au</p>
						<p>Phone: (02) 96 159 832, (+61) 414 151 549, (+61) 470 628 369</p>
					</div>
					<div className="transaction_info">
						<div>
							<h1 className="text-center text-10">-Love AUD</h1>
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
							<span className="success_text">Initiated</span>
						</div>
						<div className="amount_aud">
							{/* <p>Amount</p> */}
							<p>
								{/* {localStorage.getItem("trx_sendVal")}{" "}
								{localStorage.getItem("trx_fromCountryCurency")} */}
								{/* {?.send_amount} AUD */}
							</p>
						</div>
					</div>
					<div className="table_transaction_user_info">
						<div className="table_info">
							<h2>Transaction Details</h2>
							<table>
								<tr>
									<td>Transaction Type</td>
									<td>
										<div className="transaction_result">
											<p>Imcoming text</p>
										</div>
									</td>
								</tr>
								<tr>
									<td>Transaction ID</td>
									<td>
										<div className="transaction_result">
											<p>reference number</p>
										</div>
									</td>
								</tr>

								{/* <tr>
									<td>Payment Method</td>
									<td>
										<div className="transaction_result">
											<p>{?.transaction_details?.payin}</p>
										</div>
									</td>
								</tr> */}
								<tr>
									<td>Bank</td>
									<td>
										<div className="transaction_result">
											<p>Just guess</p>
										</div>
									</td>
								</tr>

								<tr>
									<td className="td__1">Recipient Details</td>
									<td className="td__2">
										<div className="transaction_result">
											<p>transactions numbers</p>
										</div>
									</td>
								</tr>

								<tr>
									<td>Transaction Date</td>
									<td>
										<div className="transaction_result">
											<p>Time date</p>
										</div>
									</td>
								</tr>
							</table>
						</div>
					</div>

					<div className="note">
						<h2>Note</h2>
						<p>
							Payment must come from the sender's account only, kindly input
							only your transaction reference number in your payment description
							to avoid delay in your transaction, your transaction reference
							number is
						</p>
					</div>
				</section>

				<div className="btn_share">
					<button>Download Receipt</button>
					<button>Back to Home Page</button>
				</div>
				<div className="footer_receipt_transaction">
					<small>2024 CosmoRemit | All Rights Reserved</small>
				</div>
			</section>
		</>
	);
};

export default BookingReceipt;
