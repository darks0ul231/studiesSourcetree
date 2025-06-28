import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://d1u0pzfeta6ge2.cloudfront.net/api/',///dito nya idudugtong, dont worry too miuch about this.
	timeout: 10000,
	headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(
	config => {
		const accessToken = localStorage.getItem("accessToken");
		if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

export default api;