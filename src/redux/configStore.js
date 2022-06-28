/** @format */

import { createStore } from "redux";

import { rootReducer } from "./reducer";

export const ConfigureStore = () => {
	const store = createStore(rootReducer);
	return store;
};
