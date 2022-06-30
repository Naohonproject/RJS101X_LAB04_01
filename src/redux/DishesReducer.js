/** @format */
import * as actionType from "./actions/actionTypes";

export const DishesReducer = (
	state = {
		isLoading: true,
		errorMsg: null,
		dishes: [],
	},
	action
) => {
	switch (action.type) {
		case actionType.ADD_DISHES:
			return { ...state, isLoading: false, errorMsg: null, dishes: [action.payload] };
		case actionType.DISHES_LOADING:
			return { ...state, isLoading: true, errorMsg: null, dishes: [] };
		case actionType.DISHES_FAILED:
			return { ...state, isLoading: false, errorMsg: action.payload, dishes: [] };
		default:
			return state;
	}
};
