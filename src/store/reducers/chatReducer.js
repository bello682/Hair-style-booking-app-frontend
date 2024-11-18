import * as actionTypes from "../actionType/chatActiontype";

const initialState = {
	conversation: null,
	loading: false,
	error: null,
};

const chatReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_CONVERSATION_REQUEST:
		case actionTypes.SEND_MESSAGE_REQUEST:
			return { ...state, loading: true, error: null };

		case actionTypes.FETCH_CONVERSATION_SUCCESS:
			return { ...state, loading: false, conversation: action.payload };

		case actionTypes.SEND_MESSAGE_SUCCESS:
			return {
				...state,
				loading: false,
				conversation: {
					...state.conversation,
					messages: [...(state.conversation?.messages || []), action.payload], // Update to add the new message
				},
			};

		case actionTypes.FETCH_CONVERSATION_FAILURE:
		case actionTypes.SEND_MESSAGE_FAILURE:
			return { ...state, loading: false, error: action.payload };

		default:
			return state;
	}
};

export default chatReducer;
