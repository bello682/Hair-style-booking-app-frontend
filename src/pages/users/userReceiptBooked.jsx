import React, { useEffect } from "react";
import BookingReceipt from "../../components/bookingReceipt/bookingReceiptPdf";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const UserReceiptBooked = () => {
	const dispatch = useDispatch();
	const {
		loading,
		booking: { booking },
		error,
	} = useSelector((state) => state.bookingRquestState);
	const { userDataFectched } = useSelector((state) => state.getUserDataFetch);

	console.log(booking?.booked);

	return (
		<div>
			<BookingReceipt
				key={userDataFectched?.user?._id}
				status={
					userDataFectched?.user?.isVerified ? "Initiated" : "Not Initiated"
				}
				booking_status={booking?.booked ? "Booked" : "Processing"}
				request_date={moment(booking?.requestDate).format(
					"MMMM Do YYYY, h:mm:ss a"
				)}
				service_date={moment(booking?.serviceDate).format(
					"MMMM Do YYYY, h:mm:ss a"
				)}
				service_time={booking?.serviceTime}
				reference_number={booking?.referenceNumber}
				service_type={booking?.serviceType}
				hairStyle_name={booking?.hairStyleName}
				description={booking?.description}
				fullName={userDataFectched?.user?.fullName}
				email={userDataFectched?.user?.email}
				phone_number={userDataFectched?.user?.phoneNumber}
			/>
		</div>
	);
};

export default UserReceiptBooked;
