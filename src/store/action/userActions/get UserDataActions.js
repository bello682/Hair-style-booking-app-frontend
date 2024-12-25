import { getStoredDeviceId } from "../../../utils/authStorage";
import axiosInstance from "../../../utils/axiosInstance";
import * as actionTypes from "../../actionType/userActionType/getUserDataActionTypes";
import axios from "axios";

const BASE_URL =
	process.env.REACT_APP_BASE_URL || "http://localhost:8006/Api_Url";

const userId = localStorage.getItem("userId");
const deviceId = getStoredDeviceId();
const accessToken = localStorage.getItem("accessToken");

export const getUserDataStart = () => async (dispatch) => {
	dispatch({ type: actionTypes.GET_USER_DATA_REQUEST });

	try {
		const response = await axiosInstance.get(
			`${BASE_URL}/HairStyleUsers/user/${userId}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
					"x-device-id": deviceId, // Include the device ID in the request headers
				},
			}
		);
		dispatch({
			type: actionTypes.GET_USER_DATA_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_USER_DATA_FAILURE,
			payload: error.message,
		});
	}
};
