import axios from 'axios';

export const createTodo = (data) => axios.post('/v1/api/todo', data);
export const getAllTodo = (userId) => axios.get(`/v1/api/todo/${userId}`);
export const updateTodo = (todoId) => axios.get(`/v1/api/todo/${todoId}`);
