/** @format */

import * as actionType from "./actionTypes";

import { baseUrl } from "../../shared/baseUrl";

//Todo : Hàm này là một ActionCreator, nó trả về một Action {Plain Object key lần lượt là type và payload}

export const addComment = (comment) => ({
	type: actionType.ADD_COMMENT,
	payload: comment,
});

export const postComment = (comment) => (dispatch) => {
	return fetch(baseUrl + "comments", {
		method: "POST",
		body: JSON.stringify(comment),
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "same-origin",
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error("Error " + response.status + ": " + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		)
		.then((response) => response.json())
		.then((response) => dispatch(addComment(response)))
		.catch((error) => {
			console.log("post comments", error.message);
			alert("Your comment could not be posted\nError: " + error.message);
		});
};

export const postFeedback = (feedback) => (dispatch) => {
	return fetch(baseUrl + "feedback", {
		method: "POST",
		body: JSON.stringify(feedback),
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "same-origin",
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error("Error " + response.status + ": " + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		)
		.then((response) => response.json())
		.then((response) => {
			alert(JSON.stringify(response));
			dispatch(addFeedback(response));
		})
		.catch((error) => {
			dispatch(feedbackFailed(error.message));
		});
};

export const addFeedback = (feedback) => ({
	type: actionType.ADD_FEEDBACK,
	payload: feedback,
});

export const feedbackFailed = (errorsMsg) => {
	return {
		type: actionType.FEEDBACK_FAILED,
		payload: errorsMsg,
	};
};

//Todo : Hàm này là một ThunkActionCreator, nó trả về một Thunk Action, là một hàm với đối số hàm dispatch
export const fetchDishes = () => (dispatch) => {
	dispatch(dishesLoading());

	fetch(baseUrl + "dishes")
		.then(
			(res) => {
				if (res.ok) {
					return res;
				} else {
					var err = new Error("Error" + res.status + ":" + res.statusText);
					err.res = res;
					throw err;
				}
			},
			(error) => {
				var errorMess = new Error(error.message);
				throw errorMess;
			}
		)
		.then((res) => res.json())
		.then((dishes) => dispatch(addDishes(dishes)))
		.catch((error) => {
			dispatch(dishesFailed(error.message));
		});
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
		.then(
			(res) => {
				if (res.ok) {
					return res;
				} else {
					var err = new Error("Error" + res.status + ":" + res.statusText);
					err.res = res;
					throw err;
				}
			},
			(error) => {
				var errorMess = new Error(error.message);
				throw errorMess;
			}
		)
		.then((res) => res.json())
		.then((comments) => dispatch(addComments(comments)))
		.catch((error) => {
			dispatch(commentsFailed(error.message));
		});
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
	dispatch(promosLoading());

	fetch(baseUrl + "promotions")
		.then(
			(res) => {
				if (res.ok) {
					return res;
				} else {
					var err = new Error("Error" + res.status + ":" + res.statusText);
					err.res = res;
					throw err;
				}
			},
			(error) => {
				var errorMess = new Error(error.message);
				throw errorMess;
			}
		)
		.then((res) => res.json())
		.then((promos) => dispatch(addPromos(promos)))
		.catch((error) => {
			dispatch(PromosFailed(error.message));
		});
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

export const fetchLeaders = () => (dispatch) => {
	dispatch(leadersLoading());

	fetch(baseUrl + "leaders")
		.then(
			(res) => {
				if (res.ok) {
					return res;
				} else {
					var err = new Error("Error" + res.status + ":" + res.statusText);
					err.res = res;
					throw err;
				}
			},
			(error) => {
				var errorMess = new Error(error.message);
				throw errorMess;
			}
		)
		.then((res) => res.json())
		.then((leaders) => dispatch(addLeaders(leaders)))
		.catch((error) => {
			dispatch(LeadersFailed(error.message));
		});
};

export const leadersLoading = () => {
	return {
		type: actionType.LEADERS_LOADING,
	};
};

export const addLeaders = (leaders) => ({
	type: actionType.ADD_LEADERS,
	payload: leaders,
});

export const LeadersFailed = (errorsMsg) => {
	return {
		type: actionType.LEADERS_FAILED,
		payload: errorsMsg,
	};
};
