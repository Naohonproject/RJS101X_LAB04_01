/** @format */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { rootReducer } from "./reducer";

// TODO : Việc apply thunk middleware cho phép chúng ta truyền vào hàm dispatch một hàm (thunk_Action ) thay vì chỉ truyền một object , trong hàm này có một đối số truyền vào là dispatch và trong phần đinh nghĩa của hàm chúng ta có thể xử lý logic bất đồng bộ sau đó mới thực sự dispatch action (có thể là kết quả trả về từ những logic bất đồng bộ như get dữ liệu từ server )

export const ConfigureStore = () => {
	const store = createStore(rootReducer, applyMiddleware(thunk, logger));
	return store;
};
