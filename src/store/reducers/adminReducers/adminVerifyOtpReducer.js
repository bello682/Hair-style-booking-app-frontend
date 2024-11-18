// src/reducers/verifyOtpReducer.js
import * as actionTypes from "../../actionType/adminActionTypes/adminVerifyOtpActionType";

const initialState = {
	loading: false,
	successMessage: null,
	error: null,
	token: null,
};

export const verifyAdminOtpReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADMIN_VERIFY_OTP_REQUEST:
			return { ...state, loading: true };
		case actionTypes.ADMIN_VERIFY_OTP_SUCCESS:
			return {
				...state,
				loading: false,
				successMessage: action.payload.message,
				token: action.payload.token,
			};
		case actionTypes.ADMIN_VERIFY_OTP_FAILURE:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
