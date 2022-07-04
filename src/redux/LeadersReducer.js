/** @format */

import * as actionType from "./actions/actionTypes";

export const LeadersReducer = (
	state = {
		isLoading: true,
		errorMsg: null,
		leaders: [],
	},
	action
) => {
	switch (action.type) {
		case actionType.ADD_LEADERS:
			return { ...state, isLoading: false, errorMsg: null, leaders: action.payload };
		case actionType.LEADERS_LOADING:
			return { ...state, isLoading: true, errorMsg: null, leaders: [] };
		case actionType.LEADERS_FAILED:
			return { ...state, isLoading: false, errorMsg: action.payload, leaders: [] };
		default:
			return state;
	}
};
