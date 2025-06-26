// delete account reducer
import * as actionTypes from "../../actionType/userActionType/deleteUserAccountActionTypes";

const initialState = {
	loading: false,
	success: false,
	error: null,
	successMessage: null,
};

export const deleteUserAccountReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.DELETE_USER_ACCOUNT_REQUEST:
			return {
				...state,
				loading: true,
				success: false,
				error: null,
			};
		case actionTypes.DELETE_USER_ACCOUNT_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				error: null,
				successMessage: action.payload,
			};
		case actionTypes.DELETE_USER_ACCOUNT_FAILURE:
			return {
				...state,
				loading: false,
				success: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
