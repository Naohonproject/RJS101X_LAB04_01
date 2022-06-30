/** @format */

import { COMMENTS } from "../shared/comments";

export const CommentsReducer = (state = COMMENTS, action) => {
	switch (action.type) {
		case "ADD_COMMENT":
			return [...state, action.payload];
		default:
			return state;
	}
};
