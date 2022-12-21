import axios from 'axios';

export const getAllBoard = async (userId) => {
    const result = await axios.get(`/api/kanban/boards/user/${userId}`);
    return result.data;
};

export const getBoardDetails = async (id) => {
    const result = await axios.get(`/api/kanban/boards/${id}`);
    return result.data;
};

export const createNewColumn = async (data) => {
    const result = await axios.post('/api/kanban/columns', data);
    return result.data;
};

export const updateColumn = async (id, data) => {
    const result = await axios.put(`/api/kanban/columns/${id}`, data);
    return result.data;
};

//Update sourceCol and destinationCol when drag ang drop card
export const updateTwoColumn = async (sourceColId, destinationColId, data) => {
    const result = await axios.put(`/api/kanban/columns/${sourceColId}/${destinationColId}`, data);
    return result.data;
};

export const createNewCard = async (data) => {
    const result = await axios.post('/api/kanban/cards', data);
    return result.data;
};

export const updateCard = async (id, data) => {
    const result = await axios.put(`/api/kanban/cards/${id}`, data);
    return result.data;
};
