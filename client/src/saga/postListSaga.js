import { takeEvery, call, put } from 'redux-saga/effects';
import * as ACTION from '../actions/post.actions.types';
import axios from 'axios';

function* loadAllPost(action) {
	try {
		if (!action.page) action.page = 1;
		const response = yield call(axios, `/api/posts?page=${action.page}`);

		yield put({ type: ACTION.FETCHING_LIST_SUCCESS, data: response.data.data });
	} catch (error) {
		// dispatch a failure action to the store with the error
		yield put({ type: ACTION.FETCHING_LIST_FAIL, error: error });
	}
}

export function* watchPost() {
    yield takeEvery(ACTION.LOAD_ALL_POST, loadAllPost);
}
