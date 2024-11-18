// bookingReducer.js
import * as actionTypes from "../../actionType/adminActionTypes/adminActionRequest-ActionTypes";

// acceptBookingReducer.js

const initialStateAccepted = {
	loadingAccepted: false,
	messageAccepted: null,
	errorAccepted: null,
};

export const acceptBookingReducerA = (state = initialStateAccepted, action) => {
	switch (action.type) {
		case actionTypes.ACCEPT_BOOKING_REQUEST:
			return {
				...state,
				loadingAccepted: true,
				messageAccepted: null,
				errorAccepted: null,
			};
		case actionTypes.ACCEPT_BOOKING_SUCCESS:
			return {
				...state,
				loadingAccepted: false,
				messageAccepted: "Booking Accepted",
				errorAccepted: null,
			};
		case actionTypes.ACCEPT_BOOKING_FAILURE:
			return {
				...state,
				loadingAccepted: false,
				messageAccepted: null,
				errorAccepted: action.payload,
			};
		default:
			return state;
	}
};

// rejectBookingReducer.js

const initialStateRejected = {
	loadingRejected: false,
	messageRejected: null,
	errorRejected: null,
};

export const rejectBookingReducerR = (state = initialStateRejected, action) => {
	switch (action.type) {
		case actionTypes.REJECT_BOOKING_REQUEST:
			return {
				...state,
				loadingRejected: true,
				messageRejected: null,
				errorRejected: null,
			};
		case actionTypes.REJECT_BOOKING_SUCCESS:
			return {
				...state,
				loadingRejected: false,
				messageRejected: "Booking Rejected",
				errorRejected: null,
			};
		case actionTypes.REJECT_BOOKING_FAILURE:
			return {
				...state,
				loadingRejected: false,
				messageRejected: null,
				errorRejected: action.payload,
			};
		default:
			return state;
	}
};

// completeBookingReducer.js

const initialStateCompleted = {
	loadingCompleted: false,
	messageCompleted: null,
	errorCompleted: null,
};

export const completeBookingReducerC = (
	state = initialStateCompleted,
	action
) => {
	switch (action.type) {
		case actionTypes.COMPLETE_BOOKING_REQUEST:
			return {
				...state,
				loadingCompleted: true,
				messageCompleted: null,
				errorCompleted: null,
			};
		case actionTypes.COMPLETE_BOOKING_SUCCESS:
			return {
				...state,
				loadingCompleted: false,
				messageCompleted: "Booking Completed",
				errorCompleted: null,
			};
		case actionTypes.COMPLETE_BOOKING_FAILURE:
			return {
				...state,
				loadingCompleted: false,
				messageCompleted: null,
				errorCompleted: action.payload,
			};
		default:
			return state;
	}
};

// deleteBookingReducer.js

const initialStateDelete = {
	loadingDelete: false,
	messageDelete: null,
	errorDelete: null,
};

export const deleteBookingReducerD = (state = initialStateDelete, action) => {
	switch (action.type) {
		case actionTypes.DELETE_BOOKING_REQUEST:
			return {
				...state,
				loadingDelete: true,
				messageDelete: null,
				errorDelete: null,
			};
		case actionTypes.DELETE_BOOKING_SUCCESS:
			return {
				...state,
				loadingDelete: false,
				messageDelete: "Booking Deleted",
				errorDelete: null,
			};
		case actionTypes.DELETE_BOOKING_FAILURE:
			return {
				...state,
				loadingDelete: false,
				messageDelete: null,
				errorDelete: action.payload,
			};
		default:
			return state;
	}
};
