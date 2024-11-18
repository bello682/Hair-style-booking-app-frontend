// resendOtpReducer.js
import * as actionTypes from "../../actionType/adminActionTypes/adminResendActionType";

const initialState = {
	loading: false,
	message: null,
	error: null,
};

const adminResendOtpReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.RESEND_ADMIN_OTP_REQUEST:
			return { ...state, loading: true, message: null, error: null };
		case actionTypes.RESEND_ADMIN_OTP_SUCCESS:
			return { ...state, loading: false, message: action.payload, error: null };
		case actionTypes.RESEND_ADMIN_OTP_FAILURE:
			return { ...state, loading: false, message: null, error: action.payload };
		default:
			return state;
	}
};

export default adminResendOtpReducer;
