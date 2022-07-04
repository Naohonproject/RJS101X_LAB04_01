/** @format */

import * as actionType from "./actions/actionTypes";

export const PromotionsReducer = (
	state = {
		isLoading: true,
		errorMsg: null,
		promotions: [],
	},
	action
) => {
	switch (action.type) {
		case actionType.ADD_PROMOS:
			return { ...state, isLoading: false, errorMsg: null, promotions: action.payload };
		case actionType.PROMOS_LOADING:
			return { ...state, isLoading: true, errorMsg: null, promotions: [] };
		case actionType.PROMOS_FAILED:
			return { ...state, isLoading: false, errorMsg: action.payload, promotions: [] };
		default:
			return state;
	}
};
