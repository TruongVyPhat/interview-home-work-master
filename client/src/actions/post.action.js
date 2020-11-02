import * as action from './post.actions.types';

// create Action

export const watchPost = (page) => {
    return {
        type: action.LOAD_ALL_POST,
        page: page
    }
};