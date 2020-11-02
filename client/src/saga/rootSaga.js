import { all } from 'redux-saga/effects';
import * as PostList from './postListSaga';
import * as SelectedPost from './selectedPostSaga';
import * as Comment from './commentSaga';

export default function* rootSaga() {
    yield all([ // gọi nhiều saga
        PostList.watchPost(),
        SelectedPost.watchDetail(),
        Comment.watchAllComment()
    ]);
}