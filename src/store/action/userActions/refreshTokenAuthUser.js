// // actions.js
// import axios from "axios";
// import * as actionTypes from "../../actionType/userActionType/refreshTokenAuthUser";
// import { getStoredDeviceId, setAccessToken } from "../../../utils/authStorage";
// import { getStoredRefreshToken } from "../../../utils/authStorage";

// export const refreshTokenAction =
// 	(refreshToken, deviceId) => async (dispatch) => {
// 		dispatch({ type: actionTypes.REFRESH_TOKEN_REQUEST });

// 		try {
// 			const response = await axios.post(
// 				`${process.env.REACT_APP_BASE_URL}/HairStyleUsers/refresh-token`,
// 				{ refreshToken }, // Ensure this is structured correctly
// 				{
// 					headers: {
// 						"x-device-id": deviceId,
// 					},
// 				}
// 			);

// 			const newAccessToken = response.data.accessToken;
// 			setAccessToken(newAccessToken);

// 			dispatch({
// 				type: actionTypes.REFRESH_TOKEN_SUCCESS,
// 				payload: newAccessToken,
// 			});
// 		} catch (error) {
// 			dispatch({
// 				type: actionTypes.REFRESH_TOKEN_FAILURE,
// 				payload: error.response?.data?.message || "Failed to refresh token",
// 			});
// 		}
// 	};

// =================================================================================

// refreshTokenAction.js

import axios from "axios";
import * as actionTypes from "../../actionType/userActionType/refreshTokenAuthUser";
import {
	getStoredDeviceId,
	getStoredRefreshToken,
	setAccessToken,
} from "../../../utils/authStorage";

const BASE_URL =
	process.env.REACT_APP_BASE_URL || "http://localhost:8006/Api_Url";

export const refreshTokenAction = () => async (dispatch) => {
	dispatch({ type: actionTypes.REFRESH_TOKEN_REQUEST });

	const refreshToken = getStoredRefreshToken();
	const deviceId = getStoredDeviceId();

	try {
		const response = await axios.post(
			`${BASE_URL}/HairStyleUsers/refresh-token`,
			{ refreshToken },
			{ headers: { "x-device-id": deviceId } }
		);

		const newAccessToken = response.data.accessToken;
		setAccessToken(newAccessToken);

		dispatch({
			type: actionTypes.REFRESH_TOKEN_SUCCESS,
			payload: newAccessToken,
		});

		return { type: actionTypes.REFRESH_TOKEN_SUCCESS };
	} catch (error) {
		dispatch({
			type: actionTypes.REFRESH_TOKEN_FAILURE,
			payload: error.response?.data?.message || "Failed to refresh token",
		});

		return { type: actionTypes.REFRESH_TOKEN_FAILURE };
	}
};
