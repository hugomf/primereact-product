import axios from "axios";
import { buildApiUrl } from "../config/apiConfig";

export const create = (user) => {
    const url = buildApiUrl('USER', 'CREATE');
    return axios.post(url, user).then(res => res.data);
}

export const update = (user) => {
    const url = buildApiUrl('USER', 'UPDATE', user.id);
    return axios.put(url, user).then(res => res.data);
}

export const remove = (id) => {
    const url = buildApiUrl('USER', 'DELETE', id);
    return axios.delete(url).then(res => res.data);
}

export const get = (id) => {
    const url = buildApiUrl('USER', 'GET', id);
    return axios.get(url).then(res => res.data);
}

export const getAll = () => {
    const url = buildApiUrl('USER', 'GET_ALL');
    return axios.get(url).then(res => res.data);
}

export const findAllByPageAndSort = async (first, rows, sortField, sortOrder) => {
    const page = first / rows;
    const url = buildApiUrl('USER', 'GET_BY_PAGE', page, rows, sortField, sortOrder);
    return await axios.get(url).then(res => res.data);
}
