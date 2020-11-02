import { takeEvery, call, put } from 'redux-saga/effects';
import * as ACTION from '../actions/selected.actions.type';
import axios from 'axios';

function* loadPostDetail(action) {
	try {
		const response = yield call(axios, `/api/posts/${action.post_id}`);

		yield put({ type: ACTION.FETCHING_SELECTED_SUCCESS, data: response.data.data });
	} catch (error) {
		yield put({ type: ACTION.FETCHING_SELECTED_FAIL, error: error });
	}
}

export function* watchDetail() {
    yield takeEvery(ACTION.LOAD_POST_DETAIL, loadPostDetail);
}