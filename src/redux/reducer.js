/** @format */
import { combineReducers } from "redux";
import { createForms } from "react-redux-form";

import { CommentsReducer } from "./CommentsReducer";
import { DishesReducer } from "./DishesReducer";
import { PromotionsReducer } from "./PromotionsReducer";
import { LeadersReducer } from "./LeadersReducer";
import { initialFeedback } from "./form";
// Todo : createFrom là một reducer quản lý dữ liệu từ form của react-redux-form bên trong redux-store

export const rootReducer = combineReducers({
	dishes: DishesReducer,
	comments: CommentsReducer,
	promotions: PromotionsReducer,
	// Todo: createForm sẽ tạo ra một state với field là feedback và giá trị khởi tạo ininialFeedback , state này được quản lý bởi logic bên trong creatForm, bên trong nó sẽ có Reducer để quản lý dữ liệu của form
	leaders: LeadersReducer,
	...createForms({ feedback: initialFeedback }),
});
