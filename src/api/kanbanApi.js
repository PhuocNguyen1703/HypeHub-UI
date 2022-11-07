import axios from 'axios';

export const createSection = (data) => axios.post('/kanban', data);
export const getAllSection = (userId) => axios.get(`/kanban/${userId}`);
export const updateSection = (sectionId, data) => axios.put(`/kanban/${sectionId}`, data);
export const deleteSection = (sectionId) => axios.delete(`/kanban/${sectionId}`);

export const createTask = (data) => axios.post('/kanban/task', data);
export const getAllTask = (sectionId) => axios.get(`/kanban/task/${sectionId}`);
