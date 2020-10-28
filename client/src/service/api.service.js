import axios from 'axios'

const ApiService = {
	init (baseURL) {
		axios.defaults.baseURL = baseURL
	},

	get (endpoint, data = null) {
		return axios.get(endpoint, data)
	},

	post (resource, data) {
		return axios.post(resource, data)
	},

	put (resource, data) {
		return axios.put(resource, data)
	},

	customRequest (data) {
		return axios(data)
	}
}

export default ApiService
