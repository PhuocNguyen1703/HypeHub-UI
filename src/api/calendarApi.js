import axios from 'axios';

export const createCalendar = (data) => axios.post('/calendar', data);
export const getAllCalendar = (userId) => axios.get('/calendar', userId);
