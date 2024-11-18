// src/redux/userActions.js
import axios from "axios";
import * as actionTypes from "../../actionType/adminActionTypes/registerActionType";

export const registerAdmin = (userData) => async (dispatch) => {
	dispatch({ type: actionTypes.REGISTER_ADMIN_REQUEST });

	try {
		const response = await axios.post(
			`${process.env.REACT_APP_BASE_URL}/HairStyleAdmin/register`,
			userData
		);

		const { message, adminId, token } = response.data;

		// Save tokens to localStorage

		localStorage.setItem("adminId", adminId);
		localStorage.setItem("token", token);

		dispatch({
			type: actionTypes.REGISTER_ADMIN_SUCCESS,
			payload: { message, adminId, token },
		});
	} catch (err) {
		dispatch({
			type: actionTypes.REGISTER_ADMIN_FAILURE,
			payload: err.response ? err.response.data : err.message,
		});
	}
};
