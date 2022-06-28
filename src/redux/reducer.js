/** @format */
import { combineReducers } from "redux";

import { CommentsReducer } from "./CommentsReducer";
import { DishesReducer } from "./DishesReducer";
import { PromotionsReducer } from "./PromotionsReducer";
import { LeadersReducer } from "./LeadersReducer";

export const rootReducer = combineReducers({
	dishes: DishesReducer,
	comments: CommentsReducer,
	promotions: PromotionsReducer,
	leaders: LeadersReducer,
});
