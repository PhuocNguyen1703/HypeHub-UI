import axios from 'axios';

export const createSection = (data) => axios.post('/kanban', data);
export const getAllSection = (userId) => axios.get(`/kanban/${userId}`);
export const createTask = (data) => axios.post('/kanban/task', data);
export const getAllTask = (sectionId) => axios.get(`/kanban/task/${sectionId}`);
