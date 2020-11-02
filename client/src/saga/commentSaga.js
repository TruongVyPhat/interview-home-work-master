import { takeEvery, call, put } from 'redux-saga/effects';
import * as ACTION from '../actions/comment.actions.type';
import axios from 'axios';

function* loadAllComment(action) {
	try {
		const response = yield call(axios, `/api/comments?post_id=${action.post_id}&page=1`);

		yield put({ type: ACTION.FETCHING_COMMENT_SUCCESS, data: response.data.data });
	} catch (error) {
		// dispatch a failure action to the store with the error
		yield put({ type: ACTION.FETCHING_COMMENT_FAIL, error: error });
	}
}

export function* watchAllComment() {
    yield takeEvery(ACTION.LOAD_ALL_COMMENT, loadAllComment);
}