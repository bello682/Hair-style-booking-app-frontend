import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { fetchConversation, sendMessage } from "../store/action/chatActions";

const ChatModal = ({ isOpen, onRequestClose, userId, adminId, sender }) => {
	const dispatch = useDispatch();
	const { conversation, loading, error } = useSelector((state) => state.chat);
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (isOpen && userId && adminId) {
			dispatch(fetchConversation(userId, adminId));
		}
	}, [dispatch, isOpen, userId, adminId]);

	const handleSendMessage = () => {
		if (conversation && conversation._id && message.trim()) {
			dispatch(sendMessage(conversation._id, sender, message));
			setMessage("");
		} else {
			console.log("Conversation not found or message is empty.");
		}
	};

	console.log(
		"Conversation:",
		conversation ? conversation._id : "No conversation found"
	);

	const conversationReady = conversation && conversation._id;

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
			<div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
				<h2>Chat with {sender === "user" ? "Admin" : "User"}</h2>
				{loading && <p>Loading conversation...</p>}
				{error && <p style={{ color: "red" }}>{error}</p>}

				<div
					style={{
						maxHeight: "300px",
						overflowY: "auto",
						border: "1px solid #ddd",
						padding: "10px",
					}}
				>
					{conversation && conversation.messages ? (
						conversation.messages.map((msg, index) => (
							<div key={index} style={{ padding: "8px 0" }}>
								<strong>{msg.sender}:</strong> <span>{msg.message}</span>
							</div>
						))
					) : (
						<p>No messages found.</p>
					)}
				</div>

				{conversationReady ? (
					<div style={{ display: "flex", marginTop: "15px" }}>
						<input
							type="text"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Type your message..."
							style={{
								flex: "1",
								padding: "10px",
								borderRadius: "4px",
								border: "1px solid #ddd",
							}}
						/>
						<button
							onClick={handleSendMessage}
							style={{
								padding: "10px",
								marginLeft: "10px",
								background: "#4CAF50",
								color: "white",
								border: "none",
								borderRadius: "4px",
							}}
						>
							Send
						</button>
					</div>
				) : (
					<p>Loading conversation or conversation not found.</p>
				)}
			</div>
		</Modal>
	);
};

export default ChatModal;
