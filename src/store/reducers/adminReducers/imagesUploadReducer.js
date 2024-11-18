// imageReducer.js

import * as actionTypes from "../../actionType/adminActionTypes/imagesUploadActionTypes";

const initialStateMale = {
	loadingMale: false,
	maleImages: [], // Changed to maleImages
	errorMale: null,
};

export const maleUploadReducer = (state = initialStateMale, action) => {
	switch (action.type) {
		case actionTypes.UPLOAD_MALE_IMAGES_REQUEST:
			return {
				...state,
				loadingMale: true,
				errorMale: null,
			};
		case actionTypes.UPLOAD_MALE_IMAGES_SUCCESS:
			return {
				...state,
				loadingMale: false,
				maleImages: action.payload.images,
				errorMale: null,
			};
		case actionTypes.UPLOAD_MALE_IMAGES_FAILURE:
			return {
				...state,
				loadingMale: false,
				errorMale: action.payload,
			};
		default:
			return state;
	}
};

const initialStateFemale = {
	loadingFemale: false,
	femaleImages: [], // Changed to femaleImages
	errorFemale: null,
};

export const femaleUploadReducer = (state = initialStateFemale, action) => {
	switch (action.type) {
		case actionTypes.UPLOAD_FEMALE_IMAGES_REQUEST:
			return {
				...state,
				loadingFemale: true,
				errorFemale: null,
			};
		case actionTypes.UPLOAD_FEMALE_IMAGES_SUCCESS:
			return {
				...state,
				loadingFemale: false,
				femaleImages: action.payload.images,
				errorFemale: null,
			};
		case actionTypes.UPLOAD_FEMALE_IMAGES_FAILURE:
			return {
				...state,
				loadingFemale: false,
				errorFemale: action.payload,
			};
		default:
			return state;
	}
};

const initialStateOthers = {
	loadingOthers: false,
	otherImages: [], // Changed to otherImages
	errorOthers: null,
};

export const otherUploadReducer = (state = initialStateOthers, action) => {
	switch (action.type) {
		case actionTypes.UPLOAD_OTHER_IMAGES_REQUEST:
			return {
				...state,
				loadingOthers: true,
				errorOthers: null,
			};
		case actionTypes.UPLOAD_OTHER_IMAGES_SUCCESS:
			return {
				...state,
				loadingOthers: false,
				otherImages: action.payload.images,
				errorOthers: null,
			};
		case actionTypes.UPLOAD_OTHER_IMAGES_FAILURE:
			return {
				...state,
				loadingOthers: false,
				errorOthers: action.payload,
			};
		default:
			return state;
	}
};

const initialStateGetAllImages = {
	loadingGetAllImages: false,
	allImages: [], // Changed to allImages
	errorGetAllImages: null,
};

export const getAllUploadsReducer = (
	state = initialStateGetAllImages,
	action
) => {
	switch (action.type) {
		case actionTypes.GET_ALL_IMAGES_REQUEST:
			return {
				...state,
				loadingGetAllImages: true,
				errorGetAllImages: null,
			};
		case actionTypes.GET_ALL_IMAGES_SUCCESS:
			return {
				...state,
				loadingGetAllImages: false,
				allImages: action.payload.images,
				errorGetAllImages: null,
			};
		case actionTypes.GET_ALL_IMAGES_FAILURE:
			return {
				...state,
				loadingGetAllImages: false,
				errorGetAllImages: action.payload,
			};
		default:
			return state;
	}
};
