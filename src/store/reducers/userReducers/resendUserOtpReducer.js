// resendOtpReducer.js
import * as actionTypes from "../../actionType/userActionType/resendOtp";

const initialState = {
	loading: false,
	message: "",
	error: "",
};

const resendOtpReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.RESEND_OTP_REQUEST:
			return { ...state, loading: true, message: "", error: "" };
		case actionTypes.RESEND_OTP_SUCCESS:
			return { ...state, loading: false, message: action.payload, error: "" };
		case actionTypes.RESEND_OTP_FAILURE:
			return { ...state, loading: false, message: "", error: action.payload };
		default:
			return state;
	}
};

export default resendOtpReducer;
