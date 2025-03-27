// src/store/actions/verifyOtpAction.js
import axios from "axios";
import * as actionTypes from "../../actionType/userActionType/verifyUserOtpActionTypes";
import { getStoredDeviceId } from "../../../utils/authStorage";
import { success, error } from "../../../notifivations/notification";

const BASE_URL =
	process.env.REACT_APP_BASE_URL || "http://localhost:8006/Api_Url";

export const verifyOtp = (otp) => async (dispatch) => {
	dispatch({ type: actionTypes.VERIFY_OTP_REQUEST });

	// Retrieve token from localStorage
	const token = localStorage.getItem("accessToken");
	const deviceId = getStoredDeviceId(); // Function to retrieve the device ID

	if (!token) {
		return dispatch({
			type: actionTypes.VERIFY_OTP_FAILURE,
			payload: "No token found. Please log in again.",
		});
	}

	try {
		const response = await axios.post(
			`${BASE_URL}/HairStyleUsers/verify-otp`,
			{ otp }, // Only send OTP in the request body
			{ headers: { Authorization: `Bearer ${token}`, "x-device-id": deviceId } } // Send token in headers
		);

		const { accessToken, refreshToken } = response.data;

		// Update tokens in localStorage
		localStorage.setItem("accessToken", accessToken);
		localStorage.setItem("refreshToken", refreshToken);
		localStorage.setItem("isVerified", response?.data?.user?.isVerified);

		dispatch({ type: actionTypes.VERIFY_OTP_SUCCESS, payload: response.data });

		success({
			title: "Success",
			msg: response.data.message,
		});
	} catch (err) {
		dispatch({
			type: actionTypes.VERIFY_OTP_FAILURE,
			payload: err.response ? err.response.data : err.message,
		});

		error({
			title: "Error",
			msg: err.response ? err.response.data.message : err.message,
		});
	}
};
