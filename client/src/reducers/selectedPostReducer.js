import * as selectedAction from '../actions/selected.actions.type';

const selectedReducer = (state = [], action) => {
	switch (action.type) {
		case selectedAction.FETCHING_SELECTED_SUCCESS:
			return action.data;
		case selectedAction.FETCHING_SELECTED_FAIL:
			return state;
		default:
			return state;
	}
}

export default selectedReducer;