import axios from "axios";
import * as actionTypes from "../../actionType/userActionType/resendOtp";
import { getStoredDeviceId } from "../../../utils/authStorage";
import { error, success } from "../../../notifivations/notification";

const BASE_URL =
	process.env.REACT_APP_BASE_URL || "http://localhost:8006/Api_Url";
const resendOtpRequest = () => ({
	type: actionTypes.RESEND_OTP_REQUEST,
});

const resendOtpSuccess = (message) => ({
	type: actionTypes.RESEND_OTP_SUCCESS,
	payload: message,
});

const resendOtpFailure = (error) => ({
	type: actionTypes.RESEND_OTP_FAILURE,
	payload: error,
});

// Retrieve token from localStorage
const token = localStorage.getItem("accessToken");
const deviceId = getStoredDeviceId(); // Function to retrieve the device ID

export const resendOtp = (email) => async (dispatch) => {
	dispatch(resendOtpRequest());
	try {
		const response = await axios.post(`${BASE_URL}/HairStyleUsers/resend-otp`, {
			email,
		});
		dispatch(resendOtpSuccess(response.data.message));

		const { accessToken, refreshToken } = response.data;

		// Clear old tokens (optional) and update tokens in localStorage
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		localStorage.setItem("accessToken", accessToken);
		localStorage.setItem("refreshToken", refreshToken);

		success({
			title: "Success",
			msg: response.data.message,
		});
	} catch (err) {
		dispatch(
			resendOtpFailure(err.response?.data?.message || "Failed to resend OTP")
		);

		error({
			title: "Error",
			msg: err.response ? err.response.data.message : err.message,
		});
	}
};
