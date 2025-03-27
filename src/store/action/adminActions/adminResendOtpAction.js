import axios from "axios";
import * as actionTypes from "../../actionType/adminActionTypes/adminResendActionType";
import { success, error } from "../../../notifivations/notification";

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

		success({
			title: "Success",
			msg: response.data.message,
		});

		localStorage.setItem("token", token);
	} catch (err) {
		dispatch(
			resendAdminOtpFailure(
				err.response?.data?.message || "Failed to resend OTP"
			)
		);

		error({
			title: "Error",
			msg: err.response ? err.response.data.message : err.message,
		});
	}
};
