import axios from 'axios';

export const userChats = (id) => axios.get(`/v1/api/chat/${id}`);
export const createChat = (data) => axios.post('/chat', data);
export const findChat = (firstId, secondId) => axios.get(`/chat/find/${firstId}/${secondId}`);
