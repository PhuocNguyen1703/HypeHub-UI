import axios from 'axios';

export const createEmail = (data) => axios.post('/email', data);
export const receiveEmail = (receiveId) => axios.get(`/email/${receiveId}`);
export const senderEmail = (senderId) => axios.get(`/email/${senderId}`);
