import axios from 'axios';

export const createEmail = (data) => axios.post('/v1/api/email', data);
export const receiveEmail = (receiveId) => axios.get(`/email/${receiveId}`);
export const senderEmail = (senderId) => axios.get(`/email/${senderId}`);
