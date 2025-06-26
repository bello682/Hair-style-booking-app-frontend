import axios from "axios";
import * as actionTypes from "../../actionType/userActionType/deleteUserAccountActionTypes";
import { error, success } from "../../../../src/notifivations/notification";
import axiosInstance from "../../../utils/axiosInstance";
import { getStoredDeviceId } from "./../../../utils/authStorage";

export const deleteUserAccount = (userId) => {
	return async (dispatch) => {
		dispatch({ type: actionTypes.DELETE_USER_ACCOUNT_REQUEST });

		try {
			const deviceId = getStoredDeviceId(); // Retrieve the stored device ID
			const accessToken = localStorage.getItem("accessToken"); // Get the access token

			const response = await axiosInstance.delete(
				`/HairStyleUsers/user-deactivation-profile/${userId}`,

				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
						"x-device-id": deviceId, // Include the device ID in the request headers
					},
				}
			);

			dispatch({
				type: actionTypes.DELETE_USER_ACCOUNT_SUCCESS,
				payload: response.data,
			});

			// remove tokens to localStorage
			localStorage.removeItem("accessToken");
			localStorage.removeItem("refreshToken");
			localStorage.removeItem("deviceId");
			localStorage.removeItem("userId");
			localStorage.removeItem("isVerified");

			success({
				title: "Success",
				msg: response.data?.message || "Account deactivated successfully.",
			});
		} catch (err) {
			const errorMessage =
				err.response?.data?.message ||
				err.message || // generic error
				"Failed to deactivate Account, try again";

			dispatch({
				type: actionTypes.DELETE_USER_ACCOUNT_FAILURE,
				payload: err.response?.data.message || "to deactivate Account failed.",
			});

			error({
				title: "Error",
				msg: errorMessage,
			});
		}
	};
};
