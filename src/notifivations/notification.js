import { notification } from "antd";
import DOMPurify from "dompurify";
import React from "react";

const content = (htmlContent) => {
	const sanitizedHTML = DOMPurify.sanitize(htmlContent, {
		USE_PROFILES: { html: true },
	});

	return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};

export const success = ({ placement = "topRight", title, msg }) => {
	notification.success({
		placement,
		message: title,
		description: msg,
	});
};

export const error = ({ placement = "topRight", title, msg }) => {
	notification.error({
		placement,
		message: title,
		description: msg,
	});
};

export const warning = ({
	placement = "topRight",
	title,
	msg,
	closeHandler = () => {},
	pop = false,
}) => {
	notification.warning({
		message: title,
		description: content(msg),
		placement,
		onClose: () => {
			closeHandler();
		},
		duration: pop ? 0 : 4.5,
		style: {
			zIndex: "99999999 !important",
		},
	});
};

export const info = ({
	placement = "topRight",
	title,
	msg,
	closeHandler = () => {},
	pop = false,
}) => {
	notification.info({
		message: title,
		description: content(msg),
		placement,
		onClose: () => {
			closeHandler();
		},
		duration: pop ? 0 : 4.5,
	});
};
