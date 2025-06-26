import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	success,
	error as showError,
} from "./../../../../notifivations/notification";
import GlobalConfirmModal from "./../../../../components/modal2";
import { deleteUserAccount } from "./../../../../store/action/userActions/deleteUserAccountActions";
import { getUserDataStart } from "./../../../../store/action/userActions/get UserDataActions";
import "../../../CSS/userDashboardLayoutView.css";

const DeleteUserAccount = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);

	const { userDataFectched } = useSelector((state) => state.getUserDataFetch);
	const { loading, error, successMessage } = useSelector(
		(state) => state.deleteUserAccountState
	);

	useEffect(() => {
		dispatch(getUserDataStart());
	}, [dispatch]);

	const handleDeleteAccount = () => {
		const userId = userDataFectched?.user?._id;
		if (userId) {
			dispatch(deleteUserAccount(userId));
		} else {
			showError({
				title: "Error",
				msg: "User ID not found. Please refresh or re-authenticate.",
			});
		}
	};

	useEffect(() => {
		if (successMessage) {
			success({
				title: "Success",
				msg: successMessage.message || "Account deactivated successfully.",
			});

			// localStorage.clear(); // optional full cleanup
			navigate("/user-signUp");
		}
	}, [successMessage, navigate]);

	return (
		<div className="delete_user_account_container">
			<div className="delete_user_wrapper dark:bg-gray-800 rounded-lg shadow-md">
				<h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
					Delete Your Account
				</h2>
				<p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
					{`	Are you sure you want to delete your account? ${userDataFectched?.user?.fullName} This action cannot be
					reversed.`}
				</p>
				<button
					onClick={() => setShowModal(true)}
					className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
				>
					Delete Account
				</button>

				<GlobalConfirmModal
					isOpen={showModal}
					onClose={() => setShowModal(false)}
					onConfirm={handleDeleteAccount}
					title="Confirm Account Deletion"
					message={`Are you sure you want to delete your account? ${userDataFectched?.user?.fullName} This action is permanent.`}
					loading={loading}
				/>
			</div>
		</div>
	);
};

export default DeleteUserAccount;
