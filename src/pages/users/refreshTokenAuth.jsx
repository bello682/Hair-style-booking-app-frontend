// RefreshTokenPage.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getStoredDeviceId,
	getStoredRefreshToken,
} from "../../utils/authStorage";
import { refreshTokenAction } from "./../../store/action/userActions/refreshTokenAuthUser";

const RefreshTokenHandler = () => {
	const dispatch = useDispatch();
	const { loading, error, accessToken } = useSelector(
		(state) => state.refreshTokenReducerAuth
	);

	useEffect(() => {
		const token = getStoredRefreshToken();
		const deviceId = getStoredDeviceId();

		// Trigger the refresh if there's a token and device ID
		if (token && deviceId) {
			dispatch(refreshTokenAction(token, deviceId));
		}
	}, [dispatch]);

	if (loading) return <div>Refreshing token...</div>;
	if (error)
		return (
			<div style={{ color: "red" }}>
				{error.message || JSON.stringify(error)}
			</div>
		);
	if (accessToken) return <div>Token refreshed successfully!</div>;

	return null;
};

export default RefreshTokenHandler;
