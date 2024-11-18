// bookHairService.js
import axiosInstance from "../../../utils/axiosInstance";
import * as actionTypes from "../../actionType/userActionType/userBookingHairRequest";
import { getStoredDeviceId } from "../../../utils/authStorage"; // Adjust the import path as necessary

export const bookHairService = (bookingData) => async (dispatch) => {
	dispatch({ type: actionTypes.BOOKING_REQUEST });

	try {
		const deviceId = getStoredDeviceId(); // Retrieve the stored device ID
		const accessToken = localStorage.getItem("accessToken"); // Get the access token

		const response = await axiosInstance.post(
			"/HairStyleUsers/booking/hair-service",
			bookingData,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
					"x-device-id": deviceId, // Include the device ID in the request headers
				},
			}
		);

		dispatch({ type: actionTypes.BOOKING_SUCCESS, payload: response.data });
	} catch (error) {
		dispatch({
			type: actionTypes.BOOKING_FAILURE,
			payload: error.response?.data || "Booking failed.",
		});
	}
};
