/** @format */

import * as actionType from "./actions/actionTypes";

export const CommentsReducer = (
	state = {
		errMsg: null,
		comments: [],
	},
	action
) => {
	switch (action.type) {
		case actionType.ADD_COMMENTS:
			return { ...state, errorMsg: null, comments: action.payload };
		case actionType.COMMENTS_FAILED:
			return { ...state, errorMsg: action.payload, comments: [] };
		case actionType.ADD_COMMENT:
			var comment = action.payload;
			return { ...state, comments: state.comments.concat(comment) };

		default:
			return state;
	}
};
