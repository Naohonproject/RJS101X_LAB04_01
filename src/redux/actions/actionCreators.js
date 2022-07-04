/** @format */

import * as actionType from "./actionTypes";

import { baseUrl } from "../../shared/baseUrl";

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

	fetch(baseUrl + "dishes")
		.then((res) => res.json())
		.then((dishes) => dispatch(addDishes(dishes)));
};

//Todo : Hàm này là một ActionCreator, nó trả về một Action {Plain Object key lần lượt là type và payload, action này không có payload mà nó chỉ có type action vì nó không có nhiệm vụ làm thay đổi store của redux }
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
//Todo : Hàm này là một ActionCreator, nó trả về một Action {Plain Object key lần lượt là type và payload}.Hàm này mô phỏng cho trạng thái reject khi client gửi request tới dữ liệu thông qua giao thức HTTP , nhưng server không có phản hồi, lúc này promise trả về từ WEB API Fetch sẽ rơi và rejected
export const dishesFailed = (errorsMsg) => {
	return {
		type: actionType.DISHES_FAILED,
		payload: errorsMsg,
	};
};

export const fetchComments = () => (dispatch) => {
	fetch(baseUrl + "comments")
		.then((res) => res.json())
		.then((comments) => dispatch(addComments(comments)));
};

export const addComments = (comments) => ({
	type: actionType.ADD_COMMENTS,
	payload: comments,
});

export const commentsFailed = (errorsMsg) => {
	return {
		type: actionType.COMMENTS_FAILED,
		payload: errorsMsg,
	};
};

export const fetchPromos = () => (dispatch) => {
	dispatch(promosLoading(true));

	fetch(baseUrl + "promotions")
		.then((res) => res.json())
		.then((promos) => dispatch(addPromos(promos)));
};

export const promosLoading = () => {
	return {
		type: actionType.PROMOS_LOADING,
	};
};

export const addPromos = (promos) => ({
	type: actionType.ADD_PROMOS,
	payload: promos,
});

export const PromosFailed = (errorsMsg) => {
	return {
		type: actionType.PROMOS_FAILED,
		payload: errorsMsg,
	};
};
