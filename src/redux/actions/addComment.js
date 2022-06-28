/** @format */

const addCommentCreator = (data) => {
	return {
		type: "ADD_COMMENT",
		payload: data,
	};
};

export default addCommentCreator;
