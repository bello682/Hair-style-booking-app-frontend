// src/store/actions/verifyOtpAction.js
import axios from "axios";
import * as actionTypes from "../../actionType/adminActionTypes/adminVerifyOtpActionType";
import { success, error } from "./../../../notifivations/notification";

const BASE_URL =
	process.env.REACT_APP_BASE_URL || "http://localhost:8006/Api_Url";
export const adminVerifyOtp = (otp) => async (dispatch) => {
	dispatch({ type: actionTypes.ADMIN_VERIFY_OTP_REQUEST });

	// Retrieve token from localStorage
	const existingToken = localStorage.getItem("token");

	if (!existingToken) {
		return dispatch({
			type: actionTypes.ADMIN_VERIFY_OTP_FAILURE,
			payload: "No token found. Please log in again.",
		});
	}

	try {
		const response = await axios.post(
			`${BASE_URL}/HairStyleAdmin/verifyAdmin-otp`,
			{ otp }, // Only send OTP in the request body
			{ headers: { Authorization: `Bearer ${existingToken}` } } // Send token in headers
		);

		const { message, token: newToken } = response.data; // Rename destructured token to newToken

		// Update tokens in localStorage
		localStorage.setItem("token", newToken);

		dispatch({
			type: actionTypes.ADMIN_VERIFY_OTP_SUCCESS,
			payload: { message, token: newToken },
		});

		success({
			title: "Success",
			msg: response.data.message,
		});
	} catch (err) {
		dispatch({
			type: actionTypes.ADMIN_VERIFY_OTP_FAILURE,
			payload: err.response ? err.response.data : err.message,
		});

		error({
			title: "Error",
			msg: err.response ? err.response.data.message : err.message,
		});
	}
};
