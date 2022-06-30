/** @format */

import * as actionType from "./actionTypes";
import { DISHES } from "../../shared/dishes";

export const addCommentCreator = (data) => {
	return {
		type: actionType.ADD_COMMENT,
		payload: data,
	};
};

export const fetchDishes = () => (dispatch) => {
	dispatch(dishesLoading(true));

	setTimeout(() => {
		dispatch(addDishes(DISHES));
	}, 2000);
};

export const dishesLoading = () => {
	return {
		type: actionType.DISHES_LOADING,
	};
};

export const addDishes = (dishes) => ({
	type: actionType.ADD_DISHES,
	payload: dishes,
});

export const dishesFailed = (errorsMsg) => {
	return {
		type: actionType.DISHES_FAILED,
		payload: errorsMsg,
	};
};
