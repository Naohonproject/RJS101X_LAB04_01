/** @format */
/** @format */

import * as actionType from "./actions/actionTypes";

export const FeedbackReducer = (
	state = {
		isLoading: true,
		errorMsg: null,
		feedback: [],
	},
	action
) => {
	switch (action.type) {
		case actionType.ADD_FEEDBACK:
			return { ...state, isLoading: false, errorMsg: null, promotions: action.payload };
		case actionType.FEEDBACK_LOADING:
			return { ...state, isLoading: true, errorMsg: null, feedback: [] };
		case actionType.FEEDBACK_FAILED:
			return { ...state, isLoading: false, errorMsg: action.payload, feedback: [] };
		default:
			return state;
	}
};
