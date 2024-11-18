// // bookingActions.js
// import axios from "axios";
// import * as actionTypes from "../../actionType/adminActionTypes/adminActionRequest-ActionTypes";

// const API_URL = process.env.REACT_APP_BASE_URL;

// // Accept Booking Request
// export const acceptBookingRequestByAdmin =
// 	(adminId, bookingRequestId) => async (dispatch) => {
// 		try {
// 			const token = localStorage.getItem("token");
// 			await axios.put(
// 				`${API_URL}/HairStyleAdmin/booking/accept/${adminId}/${bookingRequestId}`,
// 				{},
// 				{
// 					headers: {
// 						Authorization: `Bearer ${token}`,
// 					},
// 				}
// 			);

// 			dispatch({
// 				type: actionTypes.ACCEPT_BOOKING_REQUEST,
// 				payload: { bookingRequestId },
// 			});
// 		} catch (error) {
// 			dispatch({
// 				type: actionTypes.SET_BOOKINGS_ERROR,
// 				payload: error.message,
// 			});
// 		}
// 	};

// // Reject Booking Request
// export const rejectBookingRequestByAdmin =
// 	(adminId, bookingRequestId) => async (dispatch) => {
// 		try {
// 			const token = localStorage.getItem("token");
// 			await axios.put(
// 				`${API_URL}/HairStyleAdmin/booking/reject/${adminId}/${bookingRequestId}`,
// 				{},
// 				{
// 					headers: {
// 						Authorization: `Bearer ${token}`,
// 					},
// 				}
// 			);

// 			dispatch({
// 				type: actionTypes.REJECT_BOOKING_REQUEST,
// 				payload: { bookingRequestId },
// 			});
// 		} catch (error) {
// 			dispatch({
// 				type: actionTypes.SET_BOOKINGS_ERROR,
// 				payload: error.message,
// 			});
// 		}
// 	};

// // Complete Booking Request
// export const completeBookingRequestByAdmin =
// 	(adminId, bookingRequestId) => async (dispatch) => {
// 		try {
// 			const token = localStorage.getItem("token");
// 			await axios.put(
// 				`${API_URL}/HairStyleAdmin/booking/complete/${adminId}/${bookingRequestId}`,
// 				{},
// 				{
// 					headers: {
// 						Authorization: `Bearer ${token}`,
// 					},
// 				}
// 			);

// 			dispatch({
// 				type: actionTypes.COMPLETE_BOOKING_REQUEST,
// 				payload: { bookingRequestId },
// 			});
// 		} catch (error) {
// 			dispatch({
// 				type: actionTypes.SET_BOOKINGS_ERROR,
// 				payload: error.message,
// 			});
// 		}
// 	};

// // Delete Booking Request
// export const deleteBookingRequestByAdmin =
// 	(adminId, bookingRequestId) => async (dispatch) => {
// 		try {
// 			const token = localStorage.getItem("token");
// 			await axios.delete(
// 				`${API_URL}/HairStyleAdmin/booking/delete/${adminId}/${bookingRequestId}`,
// 				{
// 					headers: {
// 						Authorization: `Bearer ${token}`,
// 					},
// 				}
// 			);

// 			dispatch({
// 				type: actionTypes.DELETE_BOOKING_REQUEST,
// 				payload: { bookingRequestId },
// 			});
// 		} catch (error) {
// 			dispatch({
// 				type: actionTypes.SET_BOOKINGS_ERROR,
// 				payload: error.message,
// 			});
// 		}
// 	};

// bookingActions.js
import axios from "axios";
import * as actionTypes from "../../actionType/adminActionTypes/adminActionRequest-ActionTypes";
import { error, success } from "../../../../src/notifivations/notification";

// Accept booking request
export const acceptBookingRequestByAdmin =
	(adminId, bookingRequestId) => async (dispatch) => {
		dispatch({ type: actionTypes.ACCEPT_BOOKING_REQUEST });
		try {
			const token = localStorage.getItem("token");
			const response = await axios.put(
				`${process.env.REACT_APP_BASE_URL}/HairStyleAdmin/booking/accept/${adminId}/${bookingRequestId}`,
				{ bookingRequestId },
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			dispatch({
				type: actionTypes.ACCEPT_BOOKING_SUCCESS,
				payload: response.data,
			});

			console.log(response.data);
		} catch (error) {
			console.log("accept", error);
			dispatch({
				type: actionTypes.ACCEPT_BOOKING_FAILURE,
				payload: error.message || "Failed to accept booking request",
			});
		}
	};

// Reject booking request
export const rejectBookingRequestByAdmin =
	(adminId, bookingRequestId) => async (dispatch) => {
		dispatch({ type: actionTypes.REJECT_BOOKING_REQUEST });
		try {
			const token = localStorage.getItem("token");
			const res = await axios.put(
				`${process.env.REACT_APP_BASE_URL}/HairStyleAdmin/booking/reject/${adminId}/${bookingRequestId}`,
				{ bookingRequestId },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			dispatch({
				type: actionTypes.REJECT_BOOKING_SUCCESS,
				payload: res.data,
			});

			console.log(res.data);
		} catch (error) {
			console.log("reject", error);
			dispatch({
				type: actionTypes.REJECT_BOOKING_FAILURE,
				payload: error.message || "Failed to reject booking request",
			});
		}
	};

// Complete booking request
export const completeBookingRequestByAdmin =
	(adminId, bookingRequestId) => async (dispatch) => {
		dispatch({ type: actionTypes.COMPLETE_BOOKING_REQUEST });
		try {
			const token = localStorage.getItem("token");
			const res = await axios.put(
				`${process.env.REACT_APP_BASE_URL}/HairStyleAdmin/booking/complete/${adminId}/${bookingRequestId}`,
				{ bookingRequestId },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			dispatch({
				type: actionTypes.COMPLETE_BOOKING_SUCCESS,
				payload: res.data,
			});

			console.log(res.data);
		} catch (error) {
			console.log("complete", error);
			dispatch({
				type: actionTypes.COMPLETE_BOOKING_FAILURE,
				payload: error.message || "Failed to complete booking request",
			});
		}
	};

// Delete booking request
export const deleteBookingRequestByAdmin =
	(adminId, bookingRequestId) => async (dispatch) => {
		dispatch({ type: actionTypes.DELETE_BOOKING_REQUEST });
		try {
			const token = localStorage.getItem("token");
			const res = await axios.delete(
				`${process.env.REACT_APP_BASE_URL}/HairStyleAdmin/booking/delete/${adminId}/${bookingRequestId}`,

				{ headers: { Authorization: `Bearer ${token}` } }
			);
			dispatch({
				type: actionTypes.DELETE_BOOKING_SUCCESS,
				payload: res.data,
			});

			success({
				title: "Success",
				msg: res.data?.message,
			});

			console.log(res.data);
		} catch (error) {
			const errorMessage =
				err.response?.data?.message ||
				"Failed to delete booking request, try again";
			dispatch({
				type: actionTypes.DELETE_BOOKING_FAILURE,
				payload: error.message || "Failed to delete booking request",
			});
			error({
				title: "Error",
				msg: errorMessage,
			});
		}
	};
