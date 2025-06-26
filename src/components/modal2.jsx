// import React from "react";

// const GlobalConfirmModal = ({
// 	isOpen,
// 	onClose,
// 	onConfirm,
// 	title,
// 	message,
// 	loading,
// }) => {
// 	if (!isOpen) return null;

// 	return (
// 		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
// 			<div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 w-[90%] max-w-md animate-scale-fade-in">
// 				<h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
// 					{title}
// 				</h2>
// 				<p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
// 					{message}
// 				</p>
// 				<div className="flex justify-end gap-3">
// 					<button
// 						onClick={onClose}
// 						className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
// 					>
// 						No
// 					</button>
// 					<button
// 						onClick={onConfirm}
// 						disabled={loading}
// 						className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition disabled:opacity-50"
// 					>
// 						{loading ? "Deleting..." : "Yes, Delete"}
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default GlobalConfirmModal;

import React from "react";

const GlobalConfirmModal = ({
	isOpen,
	onClose,
	onConfirm,
	title,
	message,
	loading,
}) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 w-[90%] max-w-md animate-scale-fade-in delete_user_wrapper">
				<h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
					{title}
				</h2>
				<p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
				<div className="flex justify-end gap-4">
					<button
						onClick={onClose}
						className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
					>
						No
					</button>
					<button
						onClick={onConfirm}
						disabled={loading}
						className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white"
					>
						{loading ? "Deleting..." : "Yes, Delete"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default GlobalConfirmModal;
