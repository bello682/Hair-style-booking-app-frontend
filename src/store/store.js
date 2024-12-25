import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./reducers/userReducers/registerReducer";
import { verifyUserOtpReducer } from "./reducers/userReducers/verifyUserOtpReducer";
import resendOtpReducer from "./reducers/userReducers/resendUserOtpReducer";
import refreshTokenReducer from "./reducers/userReducers/refreshTokenAuthUser";
import bookingReducer from "./reducers/userReducers/userBookingHairRequest";
import chatReducer from "./reducers/chatReducer";
import adminReducer from "./reducers/adminReducers/registerReducer";
import { verifyAdminOtpReducer } from "./reducers/adminReducers/adminVerifyOtpReducer";
import adminResendOtpReducer from "./reducers/adminReducers/adminResendReducer";
import adminLoginOutReducer from "./reducers/adminReducers/login&outReducer";
import fetchBookingReducer from "./reducers/adminReducers/fetchAllBookingRequestReducer";
import {
	acceptBookingReducerA,
	completeBookingReducerC,
	deleteBookingReducerD,
	rejectBookingReducerR,
} from "./reducers/adminReducers/adminActionRequest-Reducers";
import {
	femaleUploadReducer,
	getAllUploadsReducer,
	maleUploadReducer,
	otherUploadReducer,
} from "./reducers/adminReducers/imagesUploadReducer";
import getUserDataReducerState from "./reducers/userReducers/getUserDataReducers";
import { getUserProfileReducer } from "./reducers/userReducers/getUserProfileReducers";

const reducer = combineReducers({
	registrationReducerUser: userReducer,
	verifyUserOtpReducerState: verifyUserOtpReducer,
	resendOtpReducerState: resendOtpReducer,
	refreshTokenReducerAuth: refreshTokenReducer,
	bookingRquestState: bookingReducer,
	chat: chatReducer,
	adminReducerState: adminReducer,
	verifyAdminOtpReducerState: verifyAdminOtpReducer,
	adminResendOtpReducerState: adminResendOtpReducer,
	loginOutReducerState: adminLoginOutReducer,
	fetchBookings: fetchBookingReducer,
	acceptedState: acceptBookingReducerA,
	rejectedState: rejectBookingReducerR,
	completedState: completeBookingReducerC,
	deletedState: deleteBookingReducerD,
	maleStateReducer: maleUploadReducer,
	femaleStateReducer: femaleUploadReducer,
	othersStateReducer: otherUploadReducer,
	getallUploadStateReducer: getAllUploadsReducer,
	getUserDataFetch: getUserDataReducerState,
	getUserProfileState: getUserProfileReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
