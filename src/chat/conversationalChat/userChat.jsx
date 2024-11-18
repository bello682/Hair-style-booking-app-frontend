// UserChat.js
import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import ChatModal from "../chatModal";

const UserChat = () => {
	const [isChatOpen, setIsChatOpen] = useState(false);
	const [conversation, setConversation] = useState(null);
	const [error, setError] = useState(null);

	const userId = localStorage.getItem("userId");
	const adminId = localStorage.getItem("adminId");
	const accessToken = localStorage.getItem("accessToken");

	const initiateChat = async () => {
		if (!userId) {
			setError("User ID is missing.");
			return;
		}

		try {
			const response = await axiosInstance.post(
				`${process.env.REACT_APP_BASE_URL}/conversationalComplaint/conversation`,
				{ userId, adminId }, // Pass userId explicitly in the request body
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);

			setConversation(response.data.conversation);
			setIsChatOpen(true);
		} catch (error) {
			console.error(
				"Error initiating chat:",
				error.response?.data || error.message
			);
			setError("Unable to start chat. Please try again later.");
		}
	};

	// useEffect(() => {
	// 	initiateChat();
	// }, []);

	return (
		<>
			{!conversation && (
				<button
					style={{ padding: "10px 20px", fontSize: "16px" }}
					onClick={initiateChat}
				>
					Start Chat
				</button>
			)}
			{error && <p>{error}</p>}
			{conversation && (
				<ChatModal
					isOpen={isChatOpen}
					onRequestClose={() => setIsChatOpen(false)}
					conversationId={conversation._id}
					sender="user"
				/>
			)}
		</>
	);
};

export default UserChat;
