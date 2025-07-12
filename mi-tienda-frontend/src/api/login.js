import base from './base.js';
const endpoint = 'login'

const login = async (payload) => await base.post(endpoint, payload);

const api = { login }

export default api;