import { combineReducers } from 'redux';
import postListReducer from './postListReducer';
import selectedPostReducer from './selectedPostReducer';
import commentReducer from './commentReducer';

const Reducers = combineReducers ({
    selectedPost: selectedPostReducer,
    postList: postListReducer,
    comment: commentReducer
});

export default Reducers;