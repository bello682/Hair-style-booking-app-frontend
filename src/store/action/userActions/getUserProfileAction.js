import axios from "axios";
import * as actionTypes from "../../actionType/userActionType/getUserProfileActionTpes";
import { getStoredDeviceId } from "../../../utils/authStorage";
import axiosInstance from "../../../utils/axiosInstance";

const BASE_URL =
	process.env.REACT_APP_BASE_URL || "http://localhost:8006/Api_Url";

export const getUserProfileAction = () => async (dispatch) => {
	dispatch({ type: actionTypes.GET_USER_PROFILE_REQUEST });

	try {
		const accessToken = localStorage.getItem("accessToken");
		const userId = localStorage.getItem("userId");
		const deviceId = getStoredDeviceId();

		const response = await axiosInstance.get(
			`${BASE_URL}/HairStyleUsers/profile/${userId}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
					"x-device-id": deviceId,
				},
			}
		);

		dispatch({
			type: actionTypes.GET_USER_PROFILE_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_USER_PROFILE_FAIL,
			payload: error.message || "Failed to fetch profile",
		});
	}
};
