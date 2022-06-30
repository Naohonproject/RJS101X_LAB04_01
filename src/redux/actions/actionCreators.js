/** @format */

import * as actionType from "./actionTypes";
import { DISHES } from "../../shared/dishes";

//Todo : Hàm này là một ActionCreator, nó trả về một Action {Plain Object key lần lượt là type và payload}
export const addCommentCreator = (data) => {
	return {
		type: actionType.ADD_COMMENT,
		payload: data,
	};
};

//Todo : Hàm này là một ThunkActionCreator, nó trả về một Thunk Action, là một hàm với đối số hàm dispatch
export const fetchDishes = () => (dispatch) => {
	dispatch(dishesLoading(true));

	setTimeout(() => {
		dispatch(addDishes(DISHES));
	}, 2000);
};

//Todo : Hàm này là một ActionCreator, nó trả về một Action {Plain Object key lần lượt là type và payload}
export const dishesLoading = () => {
	return {
		type: actionType.DISHES_LOADING,
	};
};
//Todo : Hàm này là một ActionCreator, nó trả về một Action {Plain Object key lần lượt là type và payload}
export const addDishes = (dishes) => ({
	type: actionType.ADD_DISHES,
	payload: dishes,
});
//Todo : Hàm này là một ActionCreator, nó trả về một Action {Plain Object key lần lượt là type và payload}
export const dishesFailed = (errorsMsg) => {
	return {
		type: actionType.DISHES_FAILED,
		payload: errorsMsg,
	};
};
