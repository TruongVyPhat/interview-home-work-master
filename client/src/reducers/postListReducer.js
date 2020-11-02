import * as postAction from '../actions/post.actions.types';

const postReducer = (state = [], action) => {
	switch (action.type) {
		case postAction.FETCHING_LIST_SUCCESS:
			return action.data;
		case postAction.FETCHING_LIST_FAIL:
			return state;
		default:
			return state;
	}
}

export default postReducer;