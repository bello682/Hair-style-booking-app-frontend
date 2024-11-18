// bookingReducer.js
import * as actionTypes from "../../actionType/adminActionTypes/fetchAllBookingRequestActionTpe";

const initialState = {
	loading: false,
	bookings: [],
	error: null,
};

const fetchBookingReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_BOOKINGS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case actionTypes.FETCH_BOOKINGS_SUCCESS:
			return {
				...state,
				loading: false,
				bookings: action.payload,
			};
		case actionTypes.FETCH_BOOKINGS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default fetchBookingReducer;
