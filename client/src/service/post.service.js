import axios from 'axios';

class PostServiceError extends Error {
	constructor(code, message) {
		super(message);
		this.name = this.constructor.name;
		this.message = message;
		this.code = code;
	}
}

const PostService = {

	get_all: async function(page) {
		try {
			const response = page ? await axios.get(`/api/posts?page=${parseInt(page)}`) : await axios.get('/api/posts?page=1');
			return response.data;
		} catch (e) {
			throw new PostServiceError(e.response.status, e.response.data.message);
		}
    },

    get_all_titles: async function() {
		try {
			const response = await axios.get('/api/posts/titles');
			return response.data;
		} catch (e) {
			throw new PostServiceError(e.response.status, e.response.data.message);
		}
    },
    
    get_detail: async function(id) {
		try {
			const response = await axios.get(`/api/posts/${id}`);
			return response.data;
		} catch (e) {
			throw new PostServiceError(e.response.status, e.response.data.message);
		}
    },
}

export default PostService;
export { PostServiceError }