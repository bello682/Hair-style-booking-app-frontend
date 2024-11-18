// src/redux/userReducer.js
import * as actionTypes from "../../actionType/userActionType/registerActionType";

const initialState = {
	loading: false,
	user: null,
	error: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.REGISTER_REQUEST:
			return { ...state, loading: true, error: null };
		case actionTypes.REGISTER_SUCCESS:
			return { ...state, loading: false, user: action.payload, error: null };
		case actionTypes.REGISTER_FAILURE:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default userReducer;
