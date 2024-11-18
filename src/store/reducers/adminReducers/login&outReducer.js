// adminReducer.js
import * as actionTypes from "../../actionType/adminActionTypes/login&outActionType";

const initialState = {
	loading: false,
	user: null,
	token: null,
	error: null,
};

const adminLoginOutReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADMIN_LOGIN_REQUEST:
			return { ...state, loading: true, error: null };
		case actionTypes.ADMIN_LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload.user,
				token: action.payload.token,
			};
		case actionTypes.ADMIN_LOGIN_FAILURE:
			return { ...state, loading: false, error: action.payload };
		case actionTypes.ADMIN_LOGOUT:
			return { ...state, user: null, token: null };
		default:
			return state;
	}
};

export default adminLoginOutReducer;
