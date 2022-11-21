import axios from 'axios';

export const createCalendar = (data) => axios.post('/calendar', data);
export const getAllCalendar = (id) => axios.get(`/calendar/${id}`);
