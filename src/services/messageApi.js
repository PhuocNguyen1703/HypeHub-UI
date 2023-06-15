import axios from 'axios';

export const getMessages = (id) => axios.get(`/v1/api/message/${id}`);
export const addMessage = (data) => axios.post(`/v1/api/message`, data);
