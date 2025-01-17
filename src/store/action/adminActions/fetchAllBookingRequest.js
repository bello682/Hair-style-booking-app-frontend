// bookingActions.js
import axios from "axios";
import * as actionTypes from "../../actionType/adminActionTypes/fetchAllBookingRequestActionTpe";
const BASE_URL =
	process.env.REACT_APP_BASE_URL || "http://localhost:8006/Api_Url";

export const fetchAllRequests = () => async (dispatch) => {
	dispatch({ type: actionTypes.FETCH_BOOKINGS_REQUEST });

	try {
		const token = localStorage.getItem("token"); // Retrieve token from local storage
		const response = await axios.get(
			`${BASE_URL}/HairStyleAdmin/bookings`,
			{}, // No body is required in the request
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		dispatch({
			type: actionTypes.FETCH_BOOKINGS_SUCCESS,
			payload: response.data, // Assumes data contains booking data
		});
	} catch (error) {
		dispatch({
			type: actionTypes.FETCH_BOOKINGS_FAILURE,
			payload: error.message || "Failed to fetch bookings",
		});
	}
};
