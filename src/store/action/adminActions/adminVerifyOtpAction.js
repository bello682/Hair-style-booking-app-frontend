// src/store/actions/verifyOtpAction.js
import axios from "axios";
import * as actionTypes from "../../actionType/adminActionTypes/adminVerifyOtpActionType";

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
			`${process.env.REACT_APP_BASE_URL}/HairStyleAdmin/verifyAdmin-otp`,
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

		console.log("OTP accepted", response.data);
	} catch (error) {
		console.error("Error verifying OTP:", error);
		dispatch({
			type: actionTypes.ADMIN_VERIFY_OTP_FAILURE,
			payload: error.response ? error.response.data : "Network Error",
		});
	}
};
