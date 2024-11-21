import axios from "axios";
import * as actionTypes from "../../actionType/adminActionTypes/adminResendActionType";

const BASE_URL =
	process.env.REACT_APP_BASE_URL || "http://localhost:8006/Api_Url";
const resendAdminOtpRequest = () => ({
	type: actionTypes.RESEND_ADMIN_OTP_REQUEST,
});

const resendAdminOtpSuccess = (message) => ({
	type: actionTypes.RESEND_ADMIN_OTP_SUCCESS,
	payload: message,
});

const resendAdminOtpFailure = (error) => ({
	type: actionTypes.RESEND_ADMIN_OTP_FAILURE,
	payload: error,
});

export const adminResendOtp = (email) => async (dispatch) => {
	dispatch(resendAdminOtpRequest());
	const token = localStorage.getItem("token"); // Retrieve token again here

	try {
		const response = await axios.post(
			`${BASE_URL}/HairStyleAdmin/resendAmin-otp`,
			{ email },
			{
				headers: {
					Authorization: `Bearer ${token}`, // Include the token in the request headers
				},
			}
		);
		dispatch(resendAdminOtpSuccess(response.data.message));

		// const { token } = response.data;

		localStorage.setItem("token", token);
	} catch (error) {
		dispatch(
			resendAdminOtpFailure(
				error.response?.data?.message || "Failed to resend OTP"
			)
		);
	}
};
