import React from "react";
import "../pages/CSS/modal.css";

const Modal = ({ onClose, content }) => {
	return (
		<div className="modal-overlay_modal" onClick={onClose}>
			<div className="modal-content_modal">
				<button className="close-button_modal" onClick={onClose}>
					×
				</button>
				<div className="modal-body_modal">
					{/* Modal content goes here */}
					{content}
				</div>
			</div>
		</div>
	);
};

export default Modal;
