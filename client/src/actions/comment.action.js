import * as action from './comment.actions.type';

// create Action

export const watchComment = (post_id) => {
    return {
        type: action.LOAD_ALL_COMMENT,
        post_id: post_id
    }
};