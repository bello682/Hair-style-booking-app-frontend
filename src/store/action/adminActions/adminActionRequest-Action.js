// bookingActions.js
import axios from "axios";
import * as actionTypes from "../../actionType/adminActionTypes/adminActionRequest-ActionTypes";
import { error, success } from "../../../../src/notifivations/notification";

const BASE_URL =
	process.env.REACT_APP_BASE_URL || "http://localhost:8006/Api_Url";
// Accept booking request
export const acceptBookingRequestByAdmin =
	(adminId, bookingRequestId) => async (dispatch) => {
		dispatch({ type: actionTypes.ACCEPT_BOOKING_REQUEST });
		try {
			const token = localStorage.getItem("token");
			const response = await axios.put(
				`${BASE_URL}/HairStyleAdmin/booking/accept/${adminId}/${bookingRequestId}`,
				{ bookingRequestId },
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			dispatch({
				type: actionTypes.ACCEPT_BOOKING_SUCCESS,
				payload: response.data,
			});

			success({
				title: "Success",
				msg: response.data?.message,
			});

			console.log(response.data);
		} catch (err) {
			console.log("accept", err);

			dispatch({
				type: actionTypes.ACCEPT_BOOKING_FAILURE,
				payload: err.message || "Failed to accept booking request",
			});

			error({
				title: "Error",
				msg: err.response?.data?.message || "Failed to accept booking request",
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
				`${BASE_URL}/HairStyleAdmin/booking/reject/${adminId}/${bookingRequestId}`,
				{ bookingRequestId },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			dispatch({
				type: actionTypes.REJECT_BOOKING_SUCCESS,
				payload: res.data,
			});

			success({
				title: "Success",
				msg: res.data?.message,
			});

			console.log(res.data);
		} catch (err) {
			console.log("reject", err);

			const errorMessage =
				err.response?.data?.message ||
				"Failed to reject booking request, try again";
			dispatch({
				type: actionTypes.REJECT_BOOKING_FAILURE,
				payload: err.message || "Failed to reject booking request",
			});

			error({
				title: "Error",
				msg: errorMessage,
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
				`${BASE_URL}/HairStyleAdmin/booking/complete/${adminId}/${bookingRequestId}`,
				{ bookingRequestId },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			dispatch({
				type: actionTypes.COMPLETE_BOOKING_SUCCESS,
				payload: res.data,
			});

			success({
				title: "Success",
				msg: res.data?.message,
			});

			console.log(res.data);
		} catch (err) {
			console.log("complete", err);
			const errorMessage =
				err.response?.data?.message ||
				"Failed to complete booking request, try again";
			dispatch({
				type: actionTypes.COMPLETE_BOOKING_FAILURE,
				payload: err.message || "Failed to complete booking request",
			});

			error({
				title: "Error",
				msg: errorMessage,
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
				`${BASE_URL}/HairStyleAdmin/booking/delete/${adminId}/${bookingRequestId}`,

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
		} catch (err) {
			const errorMessage =
				err.response?.data?.message ||
				"Failed to delete booking request, try again";
			dispatch({
				type: actionTypes.DELETE_BOOKING_FAILURE,
				payload: err.message || "Failed to delete booking request",
			});
			error({
				title: "Error",
				msg: errorMessage,
			});
		}
	};
