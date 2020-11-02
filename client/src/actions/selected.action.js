import * as action from './selected.actions.type';

// create Action

export const watchDetail = (post_id) => {
    return {
        type: action.LOAD_POST_DETAIL,
        post_id: post_id
    }
};