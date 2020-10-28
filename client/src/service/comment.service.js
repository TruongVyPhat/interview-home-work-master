import axios from 'axios';

class CommentServiceError extends Error {
	constructor(code, message) {
		super(message);
		this.name = this.constructor.name;
		this.message = message;
		this.code = code;
	}
}

const CommentService = {

	get_all: async function(post_id, page) {
		try {
			const response = page ? await axios.get(`/api/comments?post_id=${post_id}&page=${parseInt(page)}`) : await axios.get(`/api/comments?post_id=${post_id}&page=1`);
			return response.data;
		} catch (e) {
			throw new CommentServiceError(e.response.status, e.response.data.message);
		}
    },

    get_lasted: async function(post_id) {
		try {
			const response = await axios.get(`/api/comments/lasted?post_id=${post_id}`);
			return response.data;
		} catch (e) {
			throw new CommentServiceError(e.response.status, e.response.data.message);
		}
    },

}

export default CommentService;
export { CommentServiceError }