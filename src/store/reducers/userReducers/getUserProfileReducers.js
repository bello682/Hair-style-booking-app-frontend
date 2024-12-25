import * as actionTypes from "../../actionType/userActionType/getUserProfileActionTpes";

const initialState = {
	loadingProfile: false,
	userProfile: {},
	errorProfile: null,
};

export const getUserProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_USER_PROFILE_REQUEST:
			return {
				...state,
				loadingProfile: true,
			};
		case actionTypes.GET_USER_PROFILE_SUCCESS:
			return {
				...state,
				loadingProfile: false,
				userProfile: action.payload,
			};
		case actionTypes.GET_USER_PROFILE_FAIL:
			return {
				...state,
				loadingProfile: false,
				errorProfile: action.payload,
			};
		default:
			return state;
	}
};
