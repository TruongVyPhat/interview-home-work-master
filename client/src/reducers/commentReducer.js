import * as commentAction from '../actions/comment.actions.type';

const commentReducer = (state = [], action) => {
	switch (action.type) {
		case commentAction.FETCHING_COMMENT_SUCCESS:
			return action.data;
		case commentAction.FETCHING_COMMENT_FAIL:
			return state;
		default:
			return state;
	}
}

export default commentReducer;