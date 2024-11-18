// authStorage.js

export const getStoredDeviceId = () => localStorage.getItem("deviceId") || "";
export const getStoredRefreshToken = () =>
	localStorage.getItem("refreshToken") || "";
export const getStoredAccessToken = () =>
	localStorage.getItem("accessToken") || "";
export const setAccessToken = (token) =>
	localStorage.setItem("accessToken", token);
