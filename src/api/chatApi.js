import axiosClient from './axiosClient';

export const userChats = (id) => axiosClient.get(`chat/${id}`);
