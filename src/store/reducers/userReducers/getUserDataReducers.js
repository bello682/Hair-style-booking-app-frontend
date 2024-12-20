import * as actionTypes from "../../actionType/userActionType/getUserDataActionTypes";

const initialState = {
	userDataFectched: [],
	loading: false,
	error: null,
};

const getUserDataReducerState = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_USER_DATA_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.GET_USER_DATA_SUCCESS:
			return {
				loading: false,
				userDataFectched: action.payload,
				error: null,
			};
		case actionTypes.GET_USER_DATA_FAILURE:
			return {
				loading: false,
				userDataFectched: null,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default getUserDataReducerState;
