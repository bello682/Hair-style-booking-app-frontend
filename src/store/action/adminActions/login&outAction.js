// adminActions.js
import axios from "axios";
import * as actionTypes from "../../actionType/adminActionTypes/login&outActionType";

const BASE_URL =
	process.env.REACT_APP_BASE_URL || "http://localhost:8006/Api_Url";

export const loginAdminAction = (email, password) => async (dispatch) => {
	dispatch({ type: actionTypes.ADMIN_LOGIN_REQUEST });

	try {
		const response = await axios.post(`${BASE_URL}/HairStyleAdmin/login`, {
			email,
			password,
		});
		const { user, token } = response.data;

		dispatch({
			type: actionTypes.ADMIN_LOGIN_SUCCESS,
			payload: { user, token },
		});

		localStorage.setItem("token", token); // Save token for authenticated requests
		localStorage.setItem("adminId", user?.id); // Save adminId for authenticated use
	} catch (error) {
		dispatch({
			type: actionTypes.ADMIN_LOGIN_FAILURE,
			payload: error.response?.data?.message || "Login failed",
		});
	}
};

export const logoutAdmin = () => async (dispatch) => {
	try {
		const token = localStorage.getItem("token");
		await axios.post(
			`${BASE_URL}/HairStyleAdmin/logout`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);

		localStorage.removeItem("token");
		dispatch({ type: actionTypes.ADMIN_LOGOUT });
	} catch (error) {
		console.error("Logout failed:", error);
	}
};
