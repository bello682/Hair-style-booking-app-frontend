// reducer.js
import * as actionTypes from "../../actionType/userActionType/refreshTokenAuthUser";

const initialState = {
	loading: false,
	accessToken: null,
	error: null,
};

const refreshTokenReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.REFRESH_TOKEN_REQUEST:
			return { ...state, loading: true, error: null };
		case actionTypes.REFRESH_TOKEN_SUCCESS:
			return { ...state, loading: false, accessToken: action.payload };
		case actionTypes.REFRESH_TOKEN_FAILURE:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default refreshTokenReducer;
