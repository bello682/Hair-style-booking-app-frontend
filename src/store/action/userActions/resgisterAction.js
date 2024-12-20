// src/redux/userActions.js
import axios from "axios";
import { error, success } from "../../../../src/notifivations/notification";
import * as actionTypes from "../../actionType/userActionType/registerActionType";

const BASE_URL =
	process.env.REACT_APP_BASE_URL || "http://localhost:8006/Api_Url";

export const registerUser = (userData) => async (dispatch) => {
	dispatch({ type: actionTypes.REGISTER_REQUEST });

	try {
		const response = await axios.post(
			`${BASE_URL}/HairStyleUsers/register`,
			userData
		);

		const { accessToken, refreshToken, deviceId, message } = response.data;

		// Save tokens to localStorage
		localStorage.setItem("accessToken", accessToken);
		localStorage.setItem("refreshToken", refreshToken);
		localStorage.setItem("deviceId", deviceId);
		localStorage.setItem("userId", response.data.userId);

		dispatch({
			type: actionTypes.REGISTER_SUCCESS,
			payload: { accessToken, refreshToken, deviceId, message },
		});

		success({
			title: "Success",
			msg: response.data?.message,
		});
	} catch (err) {
		console.log("REGISTER ERROR", err);
		dispatch({
			type: actionTypes.REGISTER_FAILURE,
			payload: err.response ? err.response.data : err.message,
		});

		error({
			title: "Error",
			msg:
				err.response?.data?.message || "Failed to register, please try again.",
		});
	}
};
