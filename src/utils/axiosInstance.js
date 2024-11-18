// // apiClient.js
// import axios from "axios";
// import { refreshTokenAction } from "../store/action/userActions/refreshTokenAuthUser";
// import {
// 	getStoredRefreshToken,
// 	setAccessToken,
// 	getStoredAccessToken,
// } from "./authStorage";

// // Create an instance of Axios
// const apiClient = axios.create({
// 	baseURL: process.env.REACT_APP_BASE_URL,
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// });

// // Request interceptor to attach access token to headers
// apiClient.interceptors.request.use(
// 	(config) => {
// 		const accessToken = getStoredAccessToken();
// 		if (accessToken) {
// 			config.headers.Authorization = `Bearer ${accessToken}`;
// 		}
// 		return config;
// 	},
// 	(error) => Promise.reject(error)
// );

// // Response interceptor to handle 401 errors and refresh token automatically
// apiClient.interceptors.response.use(
// 	(response) => response,
// 	async (error) => {
// 		const originalRequest = error.config;

// 		if (error.response?.status === 401 && !originalRequest._retry) {
// 			originalRequest._retry = true;
// 			const refreshToken = getStoredRefreshToken();
// 			if (refreshToken) {
// 				try {
// 					const { data } = await refreshTokenAction(refreshToken); // Manually invoke refresh action
// 					const newAccessToken = data.accessToken;
// 					setAccessToken(newAccessToken); // Store new token

// 					// Retry original request with the new access token
// 					originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
// 					return apiClient(originalRequest);
// 				} catch (refreshError) {
// 					return Promise.reject(refreshError);
// 				}
// 			}
// 		}
// 		return Promise.reject(error);
// 	}
// );

// export default apiClient;

// axiosConfig.js

import axios from "axios";
import store from "./../store/store"; // Replace with the actual path to your Redux store
import { refreshTokenAction } from "./../store/action/userActions/refreshTokenAuthUser";
import { getStoredAccessToken } from "./authStorage";

// Set up base instance
const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

// Add an interceptor for requests
axiosInstance.interceptors.request.use(
	(config) => {
		const token = getStoredAccessToken();
		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// Add an interceptor for responses
axiosInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		// Check if the error is 401 and token hasn't been refreshed
		if (
			error.response &&
			error.response.status === 401 &&
			!originalRequest._retry
		) {
			originalRequest._retry = true;

			// Dispatch action to refresh token
			const refreshResult = await store.dispatch(refreshTokenAction());

			// Retry the original request if refresh was successful
			if (refreshResult && refreshResult.type === "REFRESH_TOKEN_SUCCESS") {
				const newAccessToken = getStoredAccessToken();
				originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
				return axiosInstance(originalRequest);
			}
		}

		return Promise.reject(error);
	}
);

export default axiosInstance;
