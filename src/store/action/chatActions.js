import axios from "axios";
import * as actionTypes from "../actionType/chatActiontype";

const BASE_URL =
	process.env.REACT_APP_BASE_URL || "http://localhost:8006/Api_Url";
export const fetchConversation = (userId, adminId) => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.FETCH_CONVERSATION_REQUEST });
		const response = await axios.post(
			`${BASE_URL}/conversationalComplaint/conversation`,
			{ userId, adminId }
		);

		if (response.data.conversation) {
			dispatch({
				type: actionTypes.FETCH_CONVERSATION_SUCCESS,
				payload: response.data.conversation,
			});
		} else {
			throw new Error("Conversation not found");
		}
	} catch (error) {
		dispatch({
			type: actionTypes.FETCH_CONVERSATION_FAILURE,
			payload: error.response?.data?.message || "Error fetching conversation.",
		});
	}
};

// Send a message
export const sendMessage =
	(conversationId, sender, message) => async (dispatch) => {
		dispatch({ type: actionTypes.SEND_MESSAGE_REQUEST });
		try {
			const response = await axios.post(
				`${BASE_URL}/conversationalComplaint/conversation/${conversationId}/message`,
				{ sender, message }
			);
			console.log("Response data:", response.data);

			dispatch({
				type: actionTypes.SEND_MESSAGE_SUCCESS,
				payload: response.data.conversation, // Assuming this includes `messages`
			});

			console.log("Sending message", sender, message, conversationId);
		} catch (error) {
			dispatch({
				type: actionTypes.SEND_MESSAGE_FAILURE,
				payload: error.response?.data?.message || "Could not send message",
			});
		}
	};
