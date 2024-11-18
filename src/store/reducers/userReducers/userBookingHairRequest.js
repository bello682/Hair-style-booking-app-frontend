import * as actionTypes from "../../actionType/userActionType/userBookingHairRequest";

const initialState = {
	booking: [],
	loading: false,
	error: null,
};

const bookingReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.BOOKING_REQUEST:
			return { ...state, loading: true, error: null };
		case actionTypes.BOOKING_SUCCESS:
			return { ...state, loading: false, booking: action.payload };
		case actionTypes.BOOKING_FAILURE:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default bookingReducer;
