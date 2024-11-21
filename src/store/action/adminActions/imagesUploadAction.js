import axios from "axios";
import * as actionTypes from "../../actionType/adminActionTypes/imagesUploadActionTypes";

const BASE_URL =
	process.env.REACT_APP_BASE_URL || "http://localhost:8006/Api_Url";

// Action to upload male images
export const uploadMaleImages = (formData) => async (dispatch) => {
	dispatch({ type: actionTypes.UPLOAD_MALE_IMAGES_REQUEST });
	const token = localStorage.getItem("token"); // Retrieve token again here

	try {
		const response = await axios.post(
			`${BASE_URL}/adminUploadImages/upload/male`,
			formData,
			{
				headers: {
					Authorization: `Bearer ${token}`, // Include the token in the request headers
				},
			}
		);
		dispatch({
			type: actionTypes.UPLOAD_MALE_IMAGES_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		// Ensure error payload is a string
		dispatch({
			type: actionTypes.UPLOAD_MALE_IMAGES_FAILURE,
			payload:
				error.response?.data?.message || error.message || "Upload failed",
		});
	}
};

// Action to upload female images
export const uploadFemaleImages = (formData) => async (dispatch) => {
	dispatch({ type: actionTypes.UPLOAD_FEMALE_IMAGES_REQUEST });
	const token = localStorage.getItem("token"); // Retrieve token again here

	try {
		const response = await axios.post(
			`${BASE_URL}/adminUploadImages/upload/female`,
			formData,
			{
				headers: {
					Authorization: `Bearer ${token}`, // Include the token in the request headers
				},
			}
		);
		dispatch({
			type: actionTypes.UPLOAD_FEMALE_IMAGES_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.UPLOAD_FEMALE_IMAGES_FAILURE,
			payload:
				error.response?.data?.message || error.message || "Upload failed",
		});
	}
};

// Action to upload other images
export const uploadOtherImages = (formData) => async (dispatch) => {
	dispatch({ type: actionTypes.UPLOAD_OTHER_IMAGES_REQUEST });
	const token = localStorage.getItem("token"); // Retrieve token again here

	try {
		const response = await axios.post(
			`${BASE_URL}/adminUploadImages/upload/other`,
			formData,
			{
				headers: {
					Authorization: `Bearer ${token}`, // Include the token in the request headers
				},
			}
		);
		dispatch({
			type: actionTypes.UPLOAD_OTHER_IMAGES_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.UPLOAD_OTHER_IMAGES_FAILURE,
			payload:
				error.response?.data?.message || error.message || "Upload failed",
		});
	}
};

// Action to get all images
export const getAllImages = () => async (dispatch) => {
	dispatch({ type: actionTypes.GET_ALL_IMAGES_REQUEST });

	try {
		const response = await axios.get(`${BASE_URL}/adminUploadImages/images`);
		dispatch({
			type: actionTypes.GET_ALL_IMAGES_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_ALL_IMAGES_FAILURE,
			payload:
				error.response?.data?.message ||
				error.message ||
				"fetching Uploads failed",
		});
	}
};
