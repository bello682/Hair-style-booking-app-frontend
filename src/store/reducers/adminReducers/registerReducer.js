// src/redux/userReducer.js
import * as actionTypes from "../../actionType/adminActionTypes/registerActionType";

const initialState = {
	loading: false,
	admin: null,
	error: null,
};

const adminReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.REGISTER_ADMIN_REQUEST:
			return { ...state, loading: true, error: null };
		case actionTypes.REGISTER_ADMIN_SUCCESS:
			return { ...state, loading: false, admin: action.payload, error: null };
		case actionTypes.REGISTER_ADMIN_FAILURE:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default adminReducer;
