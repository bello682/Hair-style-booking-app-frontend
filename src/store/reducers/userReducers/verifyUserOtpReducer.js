// src/reducers/verifyOtpReducer.js
import * as actionTypes from "../../actionType/userActionType/verifyUserOtpActionTypes";

const initialState = {
	loading: false,
	successMessage: null,
	error: null,
	accessToken: null,
	refreshToken: null,
};

export const verifyUserOtpReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.VERIFY_OTP_REQUEST:
			return { ...state, loading: true };
		case actionTypes.VERIFY_OTP_SUCCESS:
			return {
				...state,
				loading: false,
				successMessage: action.payload.message,
				accessToken: action.payload.accessToken,
				refreshToken: action.payload.refreshToken,
			};
		case actionTypes.VERIFY_OTP_FAILURE:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
